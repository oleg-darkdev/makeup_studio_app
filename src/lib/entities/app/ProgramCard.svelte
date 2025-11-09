<script lang="ts">
	import { fade } from 'svelte/transition';

	let { stage } = $props();

	let { title, lessons, idBlock } = stage;
	// console.log(stage)

	let showInfo = $state(false);

	import LL from '$i18n/i18n-svelte';

	// console.log(stage);
</script>

<div
	class="font-poppins faq_accordion transform transition duration-300 hover:scale-105 hover:bg-rose-400 hover:bg-opacity-20"
>
	<div class="faq_accordion-question" on:click={() => (showInfo = !showInfo)}>
		<h4 class="text-color-main-white">
			{$LL.program.module()}
			{idBlock}:
			<span class="text-color-pink noise-effect">{title}</span>
		</h4>
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
			<div class="mb-10">
				<div class="features_list-wave line-3"></div>
				<!-- <div class="margin-bottom margin-xsmall">
					<h4 class="heading-style-h5 text-weight-bold text-style-allcaps">
						{$LL.program.theory()}
					</h4>
				</div> -->
				<div class="text-rich-text w-richtext flex flex-col">
					{#each lessons as { idLesson, title, link, shortDesc }, id}
						<a href='/app/lessons{link}' target="_blank" class="text-bold text-color-main-white my-2 text-2xl no-underline">
							{idBlock}.{id + 1}:
							<span class="text-color-pink italic">{title}</span>
						</a>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
</style>
