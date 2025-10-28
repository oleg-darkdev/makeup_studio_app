<script lang="ts">
	import { onMount } from 'svelte';

	let { data } = $props();
	let { id } = data.user;

	let userDataFromDB = null;
	let user_id, payment_status, registration_date, progress_level;

	async function fetchUserData(userId) {
		try {
			const res = await fetch(`/api/user/${userId}`);
			const data = await res.json();

			// console.log('ищем челика');
			// console.log(data.user);
			if (!res.ok) throw new Error(data.error || 'Ошибка запроса');

			// console.log('Данные пользователя:', data.user);
			return data.user;
		} catch (err) {
			console.error('Ошибка получения данных пользователя:', err);
			return err;
		}
	}

	onMount(async () => {
		// вызываем функцию при загрузке компонента
		userDataFromDB = await fetchUserData(id);

		userDataFromDB = { user_id, payment_status, registration_date, progress_level };
	});
</script>

{#if payment_status == 'paid'}
	<h2>Ваш текущий урок</h2>

	<div class="video-wrapper">
		<!-- https://drive.google.com/file/d/1CIhhFNk5gVtyPS9Uz6MWQjy1s7GkQrcz/view?usp=drivesdk -->
		<!-- <iframe
		src="https://drive.google.com/uc?id=1CIhhFNk5gVtyPS9Uz6MWQjy1s7GkQrcz"
    width="640"
		height="480"
		title="Видео из Google Drive"
	></iframe> -->
		<video src="https://drive.google.com/uc?id=1CIhhFNk5gVtyPS9Uz6MWQjy1s7GkQrcz" controls> </video>
		<!-- <iframe
		src="https://drive.google.com/uc?export=preview&id=1ssL926puTac1XCDXV2H8Vi-9Nml5GUxs"
		width="640"
		height="480"
		allow="autoplay"
	></iframe> -->
	</div>
{:else}
	<h2>Урок недоступен, произведите оплату</h2>

	<a href="/app/dashboard/en" target="_blank" class="button is-link">
		<div
			class="button_icon-wrapper transform transition duration-300 hover:scale-105 hover:text-rose-300"
		>
			<div>Перейти к оплате</div>
			<div class="icon-embed-xsmall w-embed">
				<svg
					width=" 100%"
					height=" 100%"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 0.923078H10.1538V8.85231L1.30154 0L0 1.30154L8.85231 10.1538H0.923077V12L12 12L12 0.923078Z"
						fill="currentColor"
					></path>
				</svg>
			</div>
		</div>
		<div class="button_underline"></div>
		<div class="button_underline-fill"></div>
	</a>
{/if}

<style lang="postcss">
	.video-wrapper {
		position: relative;
		width: 100%;
		max-width: 900px; /* можно менять */
		margin: 0 auto;
		padding-bottom: 56.25%; /* 16:9 */
		height: 0;
	}
	.video-wrapper iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 0;
	}
</style>
