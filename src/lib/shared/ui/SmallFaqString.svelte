<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
	let { faq } = $props();

	let showAnswer = $state(false);
</script>

<ul role="list" class="service-lists-wrap accordion-border-description">
	<li class="boardgame-list-item">
		<div class="flex items-center justify-between" onclick={() => (showAnswer = !showAnswer)}>
			<div class="flex items-center">
				<span class="service-list-icon"> </span>
				<span>{faq.q}</span>
			</div>

			<div class="menu-button w-nav-button h-10 w-12 {showAnswer ? 'w--open' : ''}">
				<img
					src="images/plus-icon.svg"
					loading="lazy"
					alt=""
					class="{showAnswer
						? ' rotate-45'
						: ''}  accordion-icon h-10 w-10 transition delay-150 duration-300 ease-in-out"
				/>
			</div>
		</div>

		{#if showAnswer}
			{#each faq.a as asnwer}
				<p class="mb-2">
					{asnwer}
				</p>
			{/each}
		{/if}
	</li>
</ul>

<style lang="postcss">
</style>
