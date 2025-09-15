<script lang="ts">
	import { page } from '$app/stores';
	// import { locales } from '$i18n/i18n-util';

	let currentPath = $state();
	let rest = $state([]);

	if ($page?.url) {
		currentPath = $page.url.pathname;
		rest = currentPath.split('/').slice(2);
	}

	const locales = [
		{ code: 'en', flag: '🇬🇧', icon: '/images/locales/en_icon.svg' },
		{ code: 'ru', flag: '🇷🇺', icon: '/images/locales/ru_icon.svg' },
		{ code: 'es', flag: '🇪🇸', icon: '/images/locales/es_icon.svg' },
		{ code: 'fr', flag: '🇫🇷', icon: '/images/locales/fr_icon.svg' },
		{ code: 'de', flag: '🇩🇪', icon: '/images/locales/de_icon.svg' },
		{ code: 'pl', flag: '🇵🇱', icon: '/images/locales/pl_icon.svg' }
	];

	// const flagMap: Record<string, string> = {
	// 	en: '🇬🇧',
	// 	ru: '🇷🇺',
	// 	es: '🇪🇸',
	// 	fr: '🇫🇷',
	// 	de: '🇩🇪',
	// 	pl: '🇵🇱'
	// };

	let showLocalesList = $state(false);
</script>

<div
	on:click={() => (showLocalesList = !showLocalesList)}
	class="m-4 mx-auto flex w-64 flex-row flex-wrap justify-center gap-2"
>
	{#if !showLocalesList}
		<!-- <div> -->
		{#each locales as l}
			{#if $page.params.lang === l.code}
				<div
					class="flex w-20 items-center justify-center rounded-lg border border-pink-600 bg-pink-500 p-2 text-center text-sm font-medium text-white
			shadow-sm transition hover:bg-gray-100"
				>
					<span class="mr-1">{l.flag}</span>
					{l.code.toUpperCase()}
				</div>
			{/if}
		{/each}
		<!-- </div> -->
	{:else}
		{#each locales as l}
			<a
				href="/{l.code}"
				class="flex w-16 items-center justify-center rounded-lg border p-2 text-center text-sm font-medium no-underline shadow-sm transition hover:bg-gray-100
			{$page.params.lang === l.code
					? 'border-pink-600 bg-pink-500 text-white'
					: 'border-gray-300 bg-white text-gray-800'}"
			>
				<span class="mr-1">{l.flag}</span>
				{l.code.toUpperCase()}
			</a>
		{/each}
	{/if}
</div>
