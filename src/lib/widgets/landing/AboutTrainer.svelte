<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	const achievements = {
		overall: [
			'Mistrz świata WULOP 2022 🏆🥇',
			'Wielokrotny mistrz 🏆🥇🥇🥇',
			// 'Top-trener 🔝',
			'Współorganizator półfinału mistrzostw WORLDS Poland',
			'Międzynarodowy sędzia ⚖️',
			// 'Tester sprzętu do makijażu permanentnego',
			'Partner największych producentów sprzętu i pigmentów do makijażu permanentnego',
			'Praktykujący mistrz i nauczyciel'
			// 'Autor unikalnych metod i kursów z zakresu makijażu permanentnego'
		],

		speaker: [
			'Mówca międzynarodowych kongresów 🎤',
			'Mówca WULOP',
			'Mówca World Grand Final',
			'Mówca Bsbpmucongress Brazilian',
			'Mówca PMU Balkan Congress',
			'Mówca Etalon Mix Event',
			'Mówca Czech PMU Congress',
			'Mówca Europmufest',
			'Mówca Upgrade for Italian competition',
			'Referent World Beauty Top Serbia',
			'Mówca Queens Night',
			'Mówca Vselennaya online',
			'I wielu innych kongresów...'
		]
	};
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
								<h1 class="pre-heading">
									Podstawowy kurs online - autorka <span class="text-pink noise-effect"
										>Valeria Vasilyeva</span
									>
								</h1>
							</div>
						</div>
						<div class="margin-bottom margin-small">
							<h2>
								Wplyw <span class="text-color-pink noise-effect">transformacji</span> artystycznej

								<!-- The <span class="text-color-pink noise-effect">Impact</span> of Artful transformation -->
							</h2>
						</div>
						<div class="margin-bottom margin-small">
							<p>
								Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
								an unknown printer took a galley of type and scrambled it to make a type specimen
								book.
							</p>
						</div>

						<div class="margin-bottom margin-small pb-6">
							<div class="features_list-wave line-2"></div>
							<div class="margin-bottom margin-xsmall">
								<h3 class="heading-style-h5 text-weight-bold text-style-allcaps">Osiągnięcia</h3>
							</div>
							{#each achievements.overall as achievement}
								<p class="mb-2">
									<img src="images/about_list-pointer.svg" class="mr-4 h-6 w-6" alt="-" />
									{achievement}
								</p>
							{/each}
						</div>

						<div class="margin-bottom margin-small">
							<div class="features_list-wave"></div>
							<div class="margin-bottom margin-xsmall">
								<h3 class="heading-style-h5 text-weight-bold text-style-allcaps">
									Na konferencjach
								</h3>
							</div>

							{#each achievements.speaker as speaker}
								<p class="mb-2">
									<img src="images/about_list-pointer.svg" class="mr-4 h-6 w-6" alt="-" />
									{speaker}
								</p>
							{/each}
						</div>
						<div class="text-style-signature noise-effect">
							<img src="/images/signature_1.png" class="h-10 w-full" alt="" />
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
