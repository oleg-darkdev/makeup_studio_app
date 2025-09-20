<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	import { fade } from 'svelte/transition';
	let showInfo = $state(false);

	let { q, a } = $props();
</script>

<div class="faq_accordion">
	<div on:click={() => (showInfo = !showInfo)} class="faq_accordion-question">
		<div class="text-weight-medium text-color-main-white">
			{q}?
		</div>
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
	{#if showInfo}
		<div transition:fade class="faq_accordion-answer">
			<div class="margin-bottom margin-small">
				<div itemprop="text" class="text-rich-text w-richtext">
					{#each a as answer}
						<p>{answer}</p>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">

	
</style>
