<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	import LL from '$i18n/i18n-svelte';
</script>

<section class="section_cta">
	<div class="padding-global">
		<div class="container-large">
			<div class="padding-section-large">
				<div class="w-layout-grid cta_component noise-effect">
					<div class="cta_card">
						<div class="z-index-2 mb-10">
							<h2 class="uppercase text-color-main-black font-poppins font-black">
								{$LL.cta.titleStart()} <br />
								<span class="text-underline-v6">Valeria Vasilyeva {$LL.cta.titleCenter()} </span>
								<br />
								{$LL.cta.titleEnd()}
							</h2>
						</div>
						<div class="max-w-2xl">
							<p class="mb-4">
								{$LL.cta.description1()}
							</p>

							<p class="">
								{$LL.cta.warningMsg1()}
								<strong>{$LL.cta.warningMsg2()}</strong>
							</p>
						</div>

						<div class="mt-4">
							<div class="button-group">
								<a href="#" class="button is-alternate w-inline-block no-underline">
									<div>{$LL.cta.button()}</div>
								</a>
							</div>
						</div>
						<a href="#" class="cta_image-button-wrap w-inline-block">
							<img
								src="images/insta/12.PNG"
								loading="lazy"
								sizes="(max-width: 3024px) 100vw, 3024px"
								alt=""
								class="button_image-img large"
							/>
							<div class="button_image-btn large">
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
						</a>
						<img src="images/cta-lines.svg" loading="lazy" alt="waves" class="cta_object-lines" />
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
	}
</style>
