<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { boardgamesList } = $props();
</script>

<div class="work-process-client">
	<div class="section-title">
		<h4 class="text-dark">{boardgamesList.length} narzędzi do zarządzania</h4>
		<div class="text-dark">w jednej aplikacji</div>
	</div>
	<a href="/" class="button-primary-1 w-button">Get started</a>
	<div class="w-layout-grid grid-work-process-client">
		<div class="client-wrap">
			{#each boardgamesList as { title, logoDark }}
				<img src={logoDark} class="h-12" loading="lazy" alt="{title} Logo" />
			{/each}
		</div>
		<img src="/images/sad_runner.svg" loading="lazy" alt="" class="client-vector" />
	</div>
</div>

<style lang="postcss">
</style>
