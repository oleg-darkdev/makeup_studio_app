<script lang="ts">
	import { targetAudience } from '$sharedData';
	// import {  } from '$widgets';
	// import {  } from '$entities'
</script>

<section class="section_features" id="for">
	<div class="padding-global">
		<div class="container-large">
			<div class="padding-section-large">
				<div class="w-layout-grid features_component">
					<div class="features_heading ">
						<div class="margin-bottom margin-xsmall">
							<h2 class="mb-4">
								<!-- Why <span class="text-color-pink noise-effect">....</span> is
								<span class="text-underline-v4">....</span> -->

								<span class="text-underline-v1 noise-effect mb-4">EYE LINER</span>
							</h2>
							<h2>ten kurs <span class="text-underline-v4">dla</span></h2>
						</div>
						<div class="margin-top margin-small">
							<div class="button-group">
								<a href="/" target="_blank" class="button is-link">
									<div
										class="button_icon-wrapper transform transition duration-300 hover:scale-105 hover:text-rose-300"
									>
										<div>Zarezerwuj dostep</div>
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

								<div class="mt-4 max-w-md">
									<p class="">
										Kurs na żywo dostępny jest tylko <strong class="text-rose-300"
											>w języku polskim i rosyjskim.</strong
										>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="layout32_content">
						<div class="w-layout-grid features_list">
							{#each targetAudience as { title, desc, decoration }}
								<div class="features_list-item group">
									<div class="layout32_item-text-wrapper">
										<div class="features_list-wave {decoration}"></div>

										<div class="margin-bottom margin-xsmall">
											<h3
												class="heading-style-h5 text-weight-bold text-style-allcaps transform transition duration-300 group-hover:scale-105 group-hover:text-rose-300"
											>
												{title}
											</h3>
										</div>

										{#each desc as text}
											<p
												class="transform transition duration-300 group-hover:scale-105 group-hover:text-rose-300"
											>
												{text}
											</p>
										{/each}
									</div>
								</div>
							{/each}
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
	}
</style>
