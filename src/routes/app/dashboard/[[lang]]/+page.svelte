<script lang="ts">
	import { fade } from 'svelte/transition';
	import { UiLangSwitcherCard } from '$entitiesApp';
	import { LessonsList, Prices, Welcome, Checkout } from '$widgetsApp';
	import { uiAppLang, step, startPaymentProcess } from '$sharedStores';
	import LL from '$i18n/i18n-svelte';

	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let loading = false;
	let message = '';

	// Проверяем session_id из query после редиректа Stripe
	onMount(async () => {
		const params = $page.url.searchParams;
		const session_id = params.get('session_id');
		// console.log(session_id);

		if (session_id) {
			loading = true;
			try {
				const res = await fetch(`/app/dashboard/${$page.params.lang}`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ session_id })
				});
				const data = await res.json();

				console.log('запрос на проверку');
				if (data.ok) {
					message = 'Оплата подтверждена!';
					// acces = true
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

	let readyToNextStep = $state(false);

	let menu = [
		// { title: 'Lang ui', screen: UiLangSwitcherCard },
		// { title: 'Welcome', screen: Welcome },
		// { title: 'Lang Course', screen: UiLangSwitcherCard },
		{ title: $LL.app.prices.title(), screen: Prices },
		{ title: $LL.app.checkout.title(), screen: Checkout }
		// { title: 'Lorem ipsum #2', screen: LessonsList }
	];

	$effect(() => {
		// console.log(readyToNextStep);
		readyToNextStep = false;
		// console.log(readyToNextStep);
	});

	// import { fade } from 'svelte/transition';
	// import { goto } from '$app/navigation';
	// import { LessonsList } from '$widgetsApp';

	let { data } = $props();

	let { nickname, progress, createdAt, paymentStatus } = data.user;
	let errorCode = data.errorCode;
	let paymentConfirmed = data.paymentConfirmed;
	// async function logout() {
	// 	await fetch('/api/logout', { method: 'POST' });
	// 	goto('/login');
	// }

	// console.log(nickname)

	// lessons
	import { ProgramCard } from '$entitiesApp';

	import { programAppRu, DB } from '$sharedData';
	import { unlockBlocksPerWeek, mergeAndSplitLessons } from '$sharedUtils';

	// Имитация даты начала — позже будет приходить из БД
	const userStartDate = '2025-10-01';
	const DBWithAccess = unlockBlocksPerWeek(DB, userStartDate);

	const { availableLessons, unavailableLessons } = mergeAndSplitLessons(
		programAppRu.courseData,
		DB
	);

	// console.log(availableLessons)

	// let { program } = $props();
</script>

<main class="main-wrapper">
	<section class="section_cta">
		<div class="lg:padding-global">
			<div class="lg:container-large">
				<div class="padding-section-large">
					<div class="w-layout-grid cta_component noise-effect">
						<div class="app_wrap mx-auto max-w-4xl">
							<!-- <h2>{$startPaymentProcess}</h2> -->
							<!-- {#if !$startPaymentProcess}
									<Welcome {id} {progress} {createdAt} />
								{:else}
									<div class="z-index-2 mb-10">
										<h2 class="text-color-pink font-poppins font-black uppercase">
											<span class="text-underline-v6">{menu[$step].title}</span>
										</h2>
									</div> -->

							<!-- <ul class="timeline">
										{#each menu as title}
											<li>
												<div class="timeline-start timeline-box">{title}</div>
												<div class="timeline-middle">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														class="h-5 w-5 text-primary"
													>
														<path
															fill-rule="evenodd"
															d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
															clip-rule="evenodd"
														/>
													</svg>
												</div>
												<hr class="bg-primary" />
											</li>
										{/each}

										<li>
											<hr />
											<div class="timeline-middle">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													class="h-5 w-5"
												>
													<path
														fill-rule="evenodd"
														d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
														clip-rule="evenodd"
													/>
												</svg>
											</div>
											<div class="timeline-end timeline-box">iPhone</div>
											<hr />
										</li>
									</ul> -->

							{#key $step}
								<div transition:fade>
									{@render menu[$step].screen({
										onReady: (value) => (readyToNextStep = value)
									})}
								</div>
							{/key}

							<!-- 🔹 Кнопка Назад -->
							<!-- {#if $step > 0}
							<button
								on:click={() => ($step = $step - 1)}
								class="cta_image-button-wrap-prev w-inline-block"
							>
								<div class="button_image-btn large">
									<div class="splide_carousel-service-icon w-embed">
										<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M12 0.923H10.153V8.852L1.302 0L0 1.302L8.852 10.154H0.923V12H12V0.923Z"
												fill="currentColor"
											/>
										</svg>
									</div>
								</div>
							</button>
						{/if} -->

							<!-- 🔹 Кнопка Далее -->

							<!-- 	
														disabled={!readyToNextStep}
							
 -->
							<!-- {#if $step >= 2}
							<button
								on:click={() => ($step = $step + 1)}
								class="cta_image-button-wrap-next w-inline-block"
							>
								<div class="button_image-btn large">
									<div class="splide_carousel-service-icon w-embed">
										<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M12 0.923H10.153V8.852L1.302 0L0 1.302L8.852 10.154H0.923V12H12V0.923Z"
												fill="currentColor"
											/>
										</svg>
									</div>
								</div>
							</button>
						{/if} -->

							<img src="/images/cta-lines.svg" loading="lazy" alt="waves" class="cta_object-lines" />
							<!-- {/if} -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<style lang="postcss">
	.cta_image-button-wrap-next {
		text-align: right;
		justify-content: flex-end;
		display: flex;
		position: absolute;
		inset: auto 12rem -3rem auto;
	}

	.cta_image-button-wrap-next:disabled {
		opacity: 0.4;
		pointer-events: none;
	}

	.cta_image-button-wrap-prev {
		text-align: right;
		justify-content: flex-end;
		display: flex;
		position: absolute;
		inset: auto 4rem -3rem auto;
	}

	.app_wrap {
		color: var(--main-black);
		border-radius: 16px;
		border: 2px var(--pink) solid;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 25rem;
		padding: 3rem;
		position: relative;
		/* background-color: rgba(255, 255, 255, 0.); */
		backdrop-filter: blur(6px);
	}

	.opacity-50 {
		opacity: 0.5;
	}

	.text-underline-v6 {
		border-bottom: 2px solid var(--pink);
		padding-bottom: 4px;
	}
</style>
