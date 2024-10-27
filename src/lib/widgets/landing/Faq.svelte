<script lang="ts">
	import {
		pmFaq
	} from '$sharedData';
	import { FaqCard } from '$entitiesLanding'
</script>

<section class="careers-section section-spacing">
	<div class="w-layout-blockcontainer container-full w-container">

		<a name="faq"></a>
		<div class="w-layout-grid grid-career">
			<div class="career-title-sticky">
				<div class="section-title">
					<h2>F.A.Q.</h2>
				</div>
			</div>
			<div class="accordion-border-wrap">
				{#each pmFaq as faqItem}
					<FaqCard {faqItem}/>
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
</style>
