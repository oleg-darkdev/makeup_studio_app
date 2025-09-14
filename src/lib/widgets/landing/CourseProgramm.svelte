<script lang="ts">
	// import { courseDataPl } from '$sharedData';
	// import {  } from '$widgets';
	import { ProgramCard } from '$entitiesLanding';

	import LL from '$i18n/i18n-svelte';
</script>

<section class="section_faq" id="program">
	<div class="padding-global">
		<div class="container-large">
			<div class="padding-section-large">
				<div class="w-layout-grid faq_component">
					<div class="faq_content fade_in-300">
						<h2>
							Program kursu<span class="text-underline-v1 noise-effect"> «EYE LINER» </span>
						</h2>
						<div class="margin-top margin-small">
							<div class="button-group">
								<a href="/" target="_blank" class=" button is-link w-inline-block">
									<div
										class="button_icon-wrapper transform transition duration-300 hover:scale-105 hover:text-rose-300"
									>
										<!-- do kursu -->
										<div>Zakup dostępu</div>
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

							<div class="mt-8 max-w-md">
								<p class="">
									Kurs na żywo dostępny jest tylko <strong class="text-rose-300"
										>w języku polskim i rosyjskim.</strong
									>
								</p>
							</div>
						</div>
					</div>
					<div class="faq_icon-wrap">
						<div class="w-layout-grid faq_list">
							{#each $LL.courseData as stage}
								<ProgramCard {stage} />
							{/each}
						</div>
						<!-- <img
							src="images/course-info-diamond-3.svg"
							loading="lazy"
							alt="Diamond"
							class="faq_object-heart"
						/> -->
						<img
							src="images/course-info-diamond-1.svg"
							loading="lazy"
							alt="Diamond"
							class="faq_object-diamond-1"
						/>
						<img
							src="images/course-info-diamond-2.svg"
							loading="lazy"
							alt="Diamond"
							class="faq_object-diamond-2"
						/>
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
