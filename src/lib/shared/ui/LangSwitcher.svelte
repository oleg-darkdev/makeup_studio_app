<script lang="ts">
	// import {  } from '$shared';

	import { page } from '$app/stores';

	let currentPath = $state();
	let rest = $state([]);
	import { locales } from '$i18n/i18n-util';

	if ($page?.url) {
		currentPath = $page.url.pathname;
		rest = currentPath.split('/').slice(2);
	}

	function makeHref(locale: string) {
		return '/' + [locale, ...rest].join('/');
	}
</script>

<div class="m-4 mx-auto w-10">
	<select class='mx-auto'
		on:change={(e) => (window.location.href = makeHref((e.target as HTMLSelectElement).value))}
	>
		{#each locales as l}
			<option value={l} selected={$page.params.lang === l}>
				{l.toUpperCase()}
			</option>
		{/each}
	</select>
</div>

<style lang="postcss">
</style>
