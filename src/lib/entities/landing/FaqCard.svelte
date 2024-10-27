<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
	let { faqItem } = $props();
</script>

<div class="accordion-item" onclick={() => (faqItem.showAnswer = !faqItem.showAnswer)}>
	<div class="accordion-border-heading">
		<h6 class="accordion-border-title">
			{faqItem.q}
		</h6>
		<img src="images/white-bold-plus.svg" loading="lazy" alt="" class="accordion-border-icon" />
	</div>
	<div class="accordion-border-content">
		{#each faqItem.a as answer}
			<p class="accordion-border-description">
				{answer}
			</p>
		{/each}
		<!-- <a href="/" class="button-white w-button">Apply now</a> -->
	</div>
</div>

<style lang="postcss">
</style>
