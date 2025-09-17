<script lang="ts">
	// import { servicesPl } from '$sharedData';
	// import {  } from '$widgets';
	import { ServiceCard } from '$entitiesLanding';

	import LL from '$i18n/i18n-svelte';

	// console.log($LL.services)
</script>

<section class="section_services">
	<div class="padding-global">
		<div class="container-large position-relative">
			<div class="padding-top padding-xhuge">
				<div class="margin-bottom margin-large">
					<!-- <br/> kursu  -->
					<h2 class="heading-style-h1 font-poppins max-w-4xl font-black">
						{$LL.services.title()}
						{$LL.services.course()} <br />
						<span class="text-underline-v1 noise-effect">EYE LINER</span>
					</h2>
				</div>

				<div class="margin-bottom margin-large">
					<div class="services_heading-wrap">
						<div class="button-group">
							<a href="/" class="button is-link w-inline-block">
								<div
									class="button_icon-wrapper transform transition duration-300 hover:scale-105 hover:text-rose-300"
								>
									<div>{$LL.services.buttonBook()}</div>
									<div class="icon-embed-xxsmall w-embed">
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
						</div>
					</div>
				</div>
			</div>
			<div class="w-layout-grid services_component">
				<div class="services_carousel-wrap">
					<div class="splide cards_carousel">
						<div class="splide__track w-dyn-list">
							<div role="list" class="splide__list w-dyn-items">
								{#each $LL.services.data as service}
									<ServiceCard {service} />
								{/each}
							</div>
						</div>
					</div>
					<img
						src="images/services-heart.svg"
						loading="lazy"
						alt="Star"
						class="services_object-heart"
					/>
				</div>
			</div>
			<div class="mx-auto my-6">
				<div class="splide__buttons">
					<a href="#" class="slide-arrow prev noise-effect w-inline-block">
						<img src="images/icon_slider-arrow-left.svg" loading="lazy" alt="arrow left" />
					</a>
					<a href="#" class="slide-arrow next noise-effect w-inline-block">
						<img src="images/icon_slider-arrow-right.svg" loading="lazy" alt="Arrow Right" />
					</a>
				</div>
			</div>
			<img
				src="images/services-lines.svg"
				loading="lazy"
				alt="Lines"
				class="services_object-lines"
			/>
		</div>
	</div>
</section>

<style lang="postcss">
	.services_object-lines {
		z-index: 9;
		position: absolute;
	}
	@media screen and (min-width: 991px) {
		.splide__buttons {
			display: none;
		}

		.services_object-lines {
			inset: auto auto -3rem -8rem;
		}
	}
	@media screen and (max-width: 991px) {
	}
	@media screen and (max-width: 767px) {
		.services_object-heart {
			display: none;
		}
	}

	@media screen and (max-width: 479px) {
		.splide__buttons {
			grid-column-gap: 1rem;
			grid-row-gap: 1rem;
			justify-content: flex-end;
			align-self: flex-end;
			align-items: center;
			display: flex;
		}
		.services_object-lines {
			inset: auto auto -8rem 0;
		}
	}
</style>
