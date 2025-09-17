<script lang="ts">
	import LL from '$i18n/i18n-svelte';
</script>

<section class="section_about" id="coach">
	<div class="padding-global">
		<div class="container-large position-relative">
			<div class="padding-section-large">
				<div class="w-layout-grid about_component">
					<div class="about_image">
						<img
							src="images/about-lines.svg"
							loading="lazy"
							alt="Lines"
							class="about_object-lines"
						/>
						<div class="about_image-wrapper">
							<picture>
								<source
									sizes="(max-width: 901px) 100vw, 901px"
									srcset="images/author.avif"
									class="about_image"
									type="image/avif"
								/>
								<img
									src="images/author.jpg"
									loading="lazy"
									sizes="(max-width: 901px) 100vw, 901px"
									alt=""
									class="about_image"
								/>
							</picture>
						</div>
					</div>
					<div class="about_content">
						<div class="margin-bottom margin-xsmall">
							<div class="preheading_wrap">
								<h1 class="pre-heading font-poppins font-black">
									{$LL.coach.preheading()}
									<span class="text-pink noise-effect">Valeria Vasilyeva</span>
								</h1>
							</div>
						</div>
						<div class="mb-4">
							<h2 class="heading-style-h3 font-poppins max-w-2xl font-black uppercase">
								{$LL.coach.titleStart()}<span class="text-color-pink noise-effect"
									>{$LL.coach.titleCenter()}</span
								>
								{$LL.coach.titleEnd()}
							</h2>
						</div>
						<div class="mb-4">
							<p>
								{$LL.coach.description()}
							</p>
						</div>

						<div class="mb-4 pb-6">
							<div class="features_list-wave line-2"></div>
							<div class="margin-bottom margin-xsmall">
								<h3 class="heading-style-h5 text-weight-bold text-style-allcaps">
									{$LL.coach.achievementsTitle()}
								</h3>
							</div>
							{#each $LL.coach.achievements.overall as achievement}
								<p class="mb-2">
									<img src="images/about_list-pointer.svg" class="mr-4 h-6 w-6" alt="-" />
									{achievement()}
								</p>
							{/each}
						</div>

						<div class="mb-4">
							<div class="features_list-wave"></div>
							<div class="margin-bottom margin-xsmall">
								<h3 class="heading-style-h5 text-weight-bold text-style-allcaps">
									{$LL.coach.conferencesTitle()}
								</h3>
							</div>

							{#each $LL.coach.achievements.speaker as speaker}
								<p class="mb-2">
									<img src="images/about_list-pointer.svg" class="mr-4 h-6 w-6" alt="-" />
									{speaker()}
								</p>
							{/each}
						</div>
						<div class="text-style-signature noise-effect">
							<img
								src="/images/signature_1.png"
								class="h-10 w-full"
								alt={$LL.coach.signatureAlt()}
							/>
						</div>
						<!-- <p class="text-style-signature noise-effect">Valeria Vasilyeva</p> -->
						<!--  -->
					</div>
				</div>
			</div>
			<!-- <div class="about_object-star noise-effect-absolute">
				<img
					src="images/6422df8cc13ad9701223b5af_about-star.svg"
					loading="lazy"
					alt="Star"
					class="about_object-star-img"
				/>
			</div> -->
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
