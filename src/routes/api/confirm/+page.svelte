<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let loading = false;
	let message = '';

	// Проверяем session_id из query после редиректа Stripe
	onMount(async () => {
		const params = $page.url.searchParams;
		const session_id = params.get('session_id');
		console.log(session_id);

		if (session_id) {
			loading = true;
			try {
				const res = await fetch('/api/confirm', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ session_id })
				});
				const data = await res.json();

				console.log('запрос на проверку');
				if (data.ok) {
					message = 'Оплата подтверждена!';
				} else {
					message = data.message || 'Оплата не завершена';
				}
			} catch (err) {
				message = 'Ошибка при подтверждении оплаты';
				console.error(err);
			} finally {
				loading = false;
			}
		}
	});

	async function startCheckout(priceId) {
		const lang = $page.params.lang;
		loading = true;

		try {
			const res = await fetch('/api/checkout', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ priceId, lang })
			});
			const data = await res.json();

			if (data.url) window.location.href = data.url;
			else message = data.error || 'Ошибка при создании сессии';
		} catch (err) {
			message = 'Ошибка при создании сессии';
			console.error(err);
		} finally {
			loading = false;
		}
	}
</script>

<p>{message}</p>
<button on:click={() => startCheckout('price_xxx')} disabled={loading}> Перейти к оплате </button>
