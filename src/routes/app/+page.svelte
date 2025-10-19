<script lang="ts">
	import { fade } from 'svelte/transition';
	import { UiLangSwitcherCard } from '$entitiesApp';
	import { LessonsList, Prices, Welcome, Checkout } from '$widgetsApp';
	import { uiAppLang, step } from '$sharedStores';

	// let step = $state(0);
	let readyToNextStep = $state(false);

	// Список экранов
	let menu = [
		// { title: 'Lang ui', screen: UiLangSwitcherCard },
		// { title: 'Welcome', screen: Welcome },
		// { title: 'Lang Course', screen: UiLangSwitcherCard },
		{ title: 'выбор тарифного плана', screen: Prices },
		{ title: 'информация о заказе', screen: Checkout },
		// { title: 'Lorem ipsum #2', screen: LessonsList }
	];

	$effect(() => {
		// console.log(readyToNextStep);
		readyToNextStep = false;
		// console.log(readyToNextStep);
	});
</script>

<!--  -->
<section class="section_cta">
	<div class="padding-global">
		<div class="container-large">
			<div class="padding-section-large">
				<!--  -->
				<div class="w-layout-grid cta_component noise-effect">
					<!-- app_wrap -->
					<div class="app_wrap max-w-4xl mx-auto">
						<div class="z-index-2 mb-10">
							<h2 class="text-color-pink font-poppins font-black uppercase">
								<span class="text-underline-v6">{menu[$step].title}</span>
							</h2>
						</div>

						<!-- 🔹 Рендер текущего шага с передачей onReady -->
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

						<img src="images/cta-lines.svg" loading="lazy" alt="waves" class="cta_object-lines" />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

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
		/* background-color: var(--pink); */
		color: var(--main-black);
		border-radius: 16px;
		border: 2px var(--pink) solid;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 25rem;
		padding: 3rem;
		position: relative;
	}
</style>
