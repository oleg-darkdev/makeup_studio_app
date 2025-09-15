<script lang="ts">
	import { portfolioImgs } from '$sharedData';
	import LL from '$i18n/i18n-svelte';

	// import {  } from '$widgets';
	import { PortfolioCard } from '$entitiesLanding';
</script>

<section class="overflow-hidden">
	<div class="section_carousel">
		<div class="carousel_component">
			<!-- <div class="container-large">
				<div class="carousel_object-wrap">
					<img
						src="images/star-pink.svg"
						loading="lazy"
						alt="Star"
						class="carousel_object-star"
					/>
				</div>
			</div> -->
			<div class="splide splide_carousel">
				<div class="splide__track">
					<div class="splide__list flex w-full flex-row items-end lg:justify-between">
						<div class="hide-mobile">
							<PortfolioCard
								avif={portfolioImgs[0].avif}
								img={portfolioImgs[0].img}
								title={portfolioImgs[0].title}
							/>
						</div>
						<div class="splide__slide splide_carousel-slide mx-auto">
							<a href="/" class="splide_carousel-wrap w-inline-block">
								<div class="splide_carousel-content noise-effect">
									<div
										class="mx-auto max-w-[340px] transform transition duration-300 hover:scale-105 lg:max-w-2xl"
									>
										<div class="margin-bottom margin-small">
											<h2 class=" text-color-main-black heading-style-h3">{$LL.portfolio.title()}</h2>
										</div>
										<div class="margin-bottom margin-xxsmall">
											<p class="mb-3">
												{$LL.portfolio.desc1()}
											</p>

											<p class="mb-8">
												{$LL.portfolio.warning1()}
												<strong class="text-black">{$LL.portfolio.warning2()}</strong>
											</p>
										</div>
									</div>
									<div class="button_image-wrap">
										<img
											src="images/insta/12.PNG"
											loading="lazy"
											sizes="(max-width: 3024px) 100vw, 3024px"
											alt=""
											class="button_image-img"
										/>
										<div class="button_image-btn">
											<div class="splide_carousel-service-icon w-embed">
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
									</div>
								</div>
							</a>
						</div>
						<div class="hide-mobile">
							<PortfolioCard
								img={portfolioImgs[1].img}
								avif={portfolioImgs[1].avif}
								title={portfolioImgs[1].title}
							/>
						</div>
						<!-- <PortfolioCard img={portfolioImgs[2].img} title={portfolioImgs[2].title} /> -->
					</div>
				</div>
			</div>
		</div>
		<div class="carousel_component">
			<div aria-label="Basic Slider 001" class="splide splide_carousel-reversed">
				<div class="splide__track">
					<div class="splide__list">
						<div class="hide-mobile">
							<PortfolioCard
								img={portfolioImgs[3].img}
								avif={portfolioImgs[3].avif}
								title={portfolioImgs[3].title}
							/>
						</div>
						<div class="show-mobile">
							<PortfolioCard
								img={portfolioImgs[4].img}
								avif={portfolioImgs[4].avif}
								title={portfolioImgs[4].title}
							/>
						</div>
						<div class="hide-mobile">
							<div class="splide__slide splide_carousel-slide">
								<div class="splide_carousel-wrap">
									<div
										class="splide_carousel-image-wrap transform transition
               duration-300 hover:scale-105"
									>
										<img
											loading="lazy"
											width="Auto"
											height="Auto"
											src="images/logo.PNG"
											alt="Logo"
											class="splide_carousel-image contain"
										/>
									</div>
								</div>
							</div>
						</div>
						<div class="hide-mobile">
							<!-- <div class="hide-mobile"> -->
							<PortfolioCard
								img={portfolioImgs[5].img}
								avif={portfolioImgs[5].avif}
								title={portfolioImgs[5].title}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	@media screen and (max-width: 991px) {
	}
	@media screen and (max-width: 767px) {
	}

	@media screen and (max-width: 479px) {
		@media screen and (max-width: 479px) {
			.hide-mobile {
				display: none !important;
			}
			.show-mobile {
				margin: 0 auto;
			}
		}
	}
</style>
