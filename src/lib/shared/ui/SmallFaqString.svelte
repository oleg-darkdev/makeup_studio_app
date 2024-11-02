<script lang="ts">
	import { fade } from 'svelte/transition';
	let { faq } = $props();

	let showAnswer = $state(false);
</script>

<ul role="list" class="service-lists-wrap accordion-border-description">
	<li class="boardgame-list-item mb-6" onclick={() => (showAnswer = !showAnswer)}>
		<div class="grid grid-cols-[9fr_1fr] gap-4 mb-2" >
			<div class="flex items-start">
				<span class="service-list-icon"> </span>
				<span>{faq.q}</span>
			</div>

			<div class=" h-12 w-12 ml-auto {showAnswer ? 'w--open' : ''}">
				<img
					src="/images/plus-icon.svg"
					loading="lazy"
					alt=""
					class="{showAnswer
						? ' rotate-45'
						: ''}   h-full w-full transition delay-150 duration-300 ease-in-out"
				/>
			</div>
		</div>

		{#if showAnswer}
			<div class="" transition:fade>
				{#each faq.a as asnwer}
					<p class="mb-2">
						{asnwer}
					</p>
				{/each}
			</div>
		{/if}
	</li>
</ul>

<style lang="postcss">
</style>
