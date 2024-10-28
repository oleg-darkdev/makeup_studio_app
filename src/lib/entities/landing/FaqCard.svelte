<script lang="ts">
	// import {  } from '$shared';
	import { fade } from 'svelte/transition';
	let { faqItem } = $props();

	let showAnswer = $state(false);
</script>

<div class="accordion-item" onclick={() => (showAnswer = !showAnswer)}>
	<div class="accordion-border-heading">
		<h6 class="accordion-border-title">
			{faqItem.q}
		</h6>
		<img
			src="/images/white-bold-plus.svg"
			loading="lazy"
			alt=""
			class="{showAnswer
				? ' rotate-45'
				: ''}  accordion-border-icon transition delay-150 duration-300 ease-in-out"
		/>
	</div>
	{#if showAnswer}
		<div transition:fade class="accordion-border-content">
			{#each faqItem.a as answer}
				<p class="accordion-border-description">
					{answer}
				</p>
			{/each}
			<!-- <a href="/" class="button-white w-button">Apply now</a> -->
		</div>
	{/if}
</div>

<style lang="postcss">
	.menu-button.w--open {
		background-color: var(--color--border-color);
		border-radius: var(--border-radius--border-radius);
		margin-left: auto;
	}
</style>
