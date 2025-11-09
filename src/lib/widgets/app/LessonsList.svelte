<script lang="ts">
	// import { courseDataPl } from '$sharedData';
	// import {  } from '$widgets';
	import { ProgramCard } from '$entitiesApp';

	import LL from '$i18n/i18n-svelte';

	let { program } = $props();
</script>

<section class="overflow-hidden">
	<div class="mx-auto">
		<div class="container-large">
			<div class="padding-section-large">
				<div class="flex flex-col lg:px-10 px-2">
					<!--  -->
					<div class="faq_icon-wrap">
						<!--  -->
						<div class="w-layout-grid  program_list">
							{#each program as stage}
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
	.program_list {
		grid-column-gap: 1rem;
		grid-row-gap: 1rem;
		grid-template-rows: auto;
		grid-template-columns: 100%;
		grid-auto-columns: 100%;
		place-items: start stretch;
		display: grid;
	}

	.program_component {
		grid-template-rows: auto;
		align-items: start;
		display: grid;
		position: relative;
	}

	@media screen and (max-width: 991px) {
		.program_component {
			grid-column-gap: 1rem;
			grid-row-gap: 1rem;
			grid-template-columns: 1fr;
			grid-auto-flow: row;
			min-height: auto;
		}
	}

	@media screen and (max-width: 767px) {
	}

	@media screen and (max-width: 479px) {
	}
</style>
