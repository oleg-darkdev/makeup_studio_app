<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let userId = '';
	let userData = null;
	let loading = false;
	let error = '';

	async function checkUser() {
		error = '';
		userData = null;
		loading = true;

		try {
			const res = await fetch(`/api/user/${userId}`);
			const data = await res.json();

			if (!res.ok) throw new Error(data.error || 'Ошибка запроса');

			userData = data.user;
			// console.log('✅ Найден пользователь:', data.user);

			loginWithExistingId(userId);
		} catch (err) {
			error = err.message || 'Ошибка при проверке пользователя';
			console.error('❌ Ошибка:', err);
		} finally {
			loading = false;
		}
	}

	async function newUser() {
		loading = true;
		const res = await fetch('/api/new', { method: 'POST' });

		if (res.ok) {
			goto(`/app/dashboard/${$page.params.lang}`);
		} else {
			alert('Ошибка входа');
			loading = false;
		}
	}

	async function loginWithExistingId(userId) {
		// console.log(userId);

		try {
			const res = await fetch('/api/auth', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ userId })
			});

			const data = await res.json();
			if (res.ok) {
				// console.log('req send');

				goto(`/app/dashboard/${$page.params.lang}`);
			} else {
				throw new Error(data.error);
			}

			// console.log('✅ Куки обновлены, пользователь найден:', data.user);
		} catch (err) {
			console.error('❌ Ошибка входа:', err);
		}
	}
</script>

<main class="main-wrapper py-6 lg:py-20">
	<div class="wrapper mx-auto max-w-2xl rounded-2xl border-2 border-[--pink] py-40 shadow-md">
		<div class="mx-auto mx-auto flex w-full flex-col items-center justify-center px-6">
			<h1 class="mb-4 text-2xl font-bold text-black">Создать аккаунт</h1>
			<p class="mb-6 text-sm text-gray-600">
				Создание аккаунта происходит без привязки e-mail. Никому не высылайте свой ID.
			</p>

			<div class="mx-auto flex w-full max-w-sm flex-col items-center justify-center">
				<button
					class="w-full rounded-lg bg-indigo-600 py-3 text-white hover:bg-indigo-700"
					onclick={newUser}
					disabled={loading}
				>
					{#if loading}Вход...{:else}Войти анонимно{/if}
				</button>
				<div class="divider">OR</div>

				<form
					class="flex w-full max-w-md flex-col items-start gap-3 rounded-2xl bg-gray-50 p-4 shadow-md"
				>
					<label class="input validator flex w-full items-center gap-2">
						<svg
							class="h-[1.2em] opacity-50"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<g
								stroke-linejoin="round"
								stroke-linecap="round"
								stroke-width="2.5"
								fill="none"
								stroke="currentColor"
							>
								<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
								<circle cx="12" cy="7" r="4"></circle>
							</g>
						</svg>

						<input
							bind:value={userId}
							type="text"
							required
							placeholder="Введите ваш ID"
							pattern="[A-Za-z0-9\-]+"
							minlength="3"
							maxlength="60"
							title="Только буквы, цифры и дефис"
							class="flex-1 rounded-lg border p-2 outline-none focus:ring-2 focus:ring-rose-400"
						/>
					</label>

					<button
						onclick={() => checkUser()}
						class="w-full rounded-xl bg-rose-500 px-4 py-2 text-white transition hover:bg-rose-600"
					>
						{#if loading}
							⏳ Проверка...
						{:else}
							Проверить ID
						{/if}
					</button>

					{#if error}
						<p class="mt-2 text-sm text-red-500">{error}</p>
					{/if}

					{#if userData}
						<div class="mt-3 w-full rounded-xl border bg-white p-3">
							<p><strong>ID:</strong> {userData.user_id}</p>
							<p><strong>Статус оплаты:</strong> {userData.payment_status}</p>
							<p><strong>Прогресс:</strong> {userData.progress_level}%</p>
							<p>
								<strong>Дата регистрации:</strong>
								{new Date(userData.registration_date).toLocaleDateString()}
							</p>
						</div>
					{/if}
				</form>

				<p class="mb-6 mt-6 text-sm text-gray-600">
					Если вы уже имеет свой ID - впишите его в эту форму.
				</p>

				<p class="validator-hint">
					Must be 3 to 30 characters
					<br />containing only letters, numbers or dash
				</p>
			</div>
			<!-- <div class="mx-auto max-w-sm"></div> -->
		</div>
	</div>
</main>

<style>
	.wrapper {
		/* background-color: var(--pink); */
		/* color: var(--main-black);
		border-radius: 16px;
		border: 2px var(--pink) solid; */
	}
</style>
