<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { LangSwitcher } from '$sharedUi';
	import LL from '$i18n/i18n-svelte';

	let userId = '';
	let userData = null;
	let loading = false;
	let error = '';

	async function checkUser(nickname) {
		error = '';
		userData = null;
		loading = true;

		try {
			// Запрос пользователя по nickname
			const res = await fetch(`/api/user/${nickname}`);
			const data = await res.json();

			if (res.ok && data.user) {
				// ✅ Пользователь найден
				userData = data.user;
				console.log('✅ Пользователь найден:', data.user);

				// Авторизация и переход в dashboard
				await loginWithExistingId(nickname);
				goto(`/app/dashboard/${$page.params.lang}`);
			} else {
				// ❌ Пользователь не найден — создаём нового
				console.warn('⚠️ Пользователь не найден, создаю нового...');
				await newUser(nickname);
			}
		} catch (err) {
			error = err.message || 'Ошибка при проверке пользователя';
			console.error('❌ Ошибка:', err);
		} finally {
			loading = false;
		}
	}

	async function newUser(nickname) {
		loading = true;

		const res = await fetch('/api/new', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ nickname })
		});

		if (res.ok) {
			goto(`/app/dashboard/${$page.params.lang}`);
		} else {
			alert('Ошибка входа');
			loading = false;
		}
	}

	async function loginWithExistingId(userId) {
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
		} catch (err) {
			console.error('❌ Ошибка входа:', err);
		}
	}
</script>

<main class="main-wrapper py-6 lg:py-16">
	<div class="wrapper mx-auto max-w-2xl rounded-2xl border-2 border-[--pink] py-20 shadow-md">
		<!-- md:left-[35%] left-[27%] -->

		<div class="absolute -left-8 top-8 mb-10 flex w-full flex-row md:-left-8 lg:left-[50]">
			<!-- <div class=" mr-4 h-10">
				<a href="/app" aria-current="page" class="navbar_logo-link">
					<img src="/images/logo.PNG" loading="lazy" alt="" class="header_logo" />
				</a>
			</div> -->
			<LangSwitcher />
		</div>
		<div class="mx-auto mx-auto flex w-full flex-col items-center justify-center px-6">
			<div class="text-style-signature noise-effect mb-6">
				<img src="/images/signature_1.png" class="h-6 w-full" alt="Logotype" />
			</div>

			<h2 class="heading-style-h2 font-poppins mb-10 text-center font-black uppercase">
				{$LL.app.auth.title()}
				<span class="text-underline-v1 noise-effect"> «EYE LINER» </span>
			</h2>
			<p class="mb-6 max-w-md text-center text-sm text-gray-600">
				{$LL.app.auth.description()}
			</p>

			<div class="mx-auto flex w-full max-w-sm flex-col items-center justify-center">
				<!-- <button
					class="w-full rounded-xl bg-rose-400 px-4 py-2 text-white transition hover:bg-rose-600"
					onclick={newUser}
				>
					{$LL.app.auth.createAccountButton()}
				</button>
				<div class="divider uppercase">{$LL.app.auth.orDivider()}</div>
				<p class="mb-6 mt-2 text-center text-sm text-gray-600">
					{$LL.app.auth.existingUserText()}
				</p> -->
				<form
					class="flex w-full max-w-md flex-col items-start gap-3 rounded-xl bg-rose-300 bg-opacity-75 p-4 shadow-md"
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
							placeholder={$LL.app.auth.inputPlaceholder()}
							pattern="[A-Za-z0-9\-]+"
							minlength="3"
							maxlength="60"
							title={$LL.app.auth.inputTitle()}
							class="flex-1 rounded-lg border p-2 outline-none focus:ring-2 focus:ring-rose-400"
						/>
					</label>

					<button
						onclick={() => checkUser(userId)}
						class="w-full rounded-xl bg-rose-600 px-4 py-2 text-white transition hover:bg-rose-700"
					>
						{$LL.app.auth.checkButton()}
					</button>

					{#if error}
						<p class="mt-2 text-sm text-red-500">{error}</p>
					{/if}

					{#if userData}
						<div class="mt-3 w-full rounded-xl border bg-white p-3">
							<p><strong>{$LL.app.auth.userData.idLabel()}:</strong> {userData.user_id}</p>
							<p>
								<strong>{$LL.app.auth.userData.paymentStatus()}:</strong>
								{userData.payment_status}
							</p>
							<p>
								<strong>{$LL.app.auth.userData.progressLevel()}:</strong>
								{userData.progress_level}%
							</p>
							<p>
								<strong>{$LL.app.auth.userData.registrationDate()}:</strong>
								{new Date(userData.registration_date).toLocaleDateString()}
							</p>
						</div>
					{/if}
				</form>

				<p class="validator-hint"></p>
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
	.header_logo {
		max-height: 5rem;
		margin: 1.5em;
	}
	@media screen and (max-width: 479px) {
		.header_logo {
			max-height: 3rem;
		}
	}
</style>
