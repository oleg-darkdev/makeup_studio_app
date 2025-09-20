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
		{ code: 'en', flag: '🇬🇧', icon: '/images/locales/uk_icon.svg' },
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
	class="absolute left-20 mx-auto ml-20 flex w-64 flex-row flex-wrap content-end items-end gap-2"
>
	{#if !showLocalesList}
		<!-- <div> -->
		{#each locales as l}
			{#if $page.params.lang === l.code}
				<div
					class="flex w-20 items-center justify-center rounded-lg border border-gray-600  p-2 text-center text-sm font-medium text-white
			shadow-sm transition hover:bg-gray-100"
				>
					<img src={l.icon} class="rounded-md h-4 w-8" alt="" />

					<!-- <span class="mr-1">{l.flag}</span> -->
					{l.code.toUpperCase()}
				</div>
			{/if}
		{/each}
		<!-- </div> -->
	{:else}
		{#each locales as l}
			<!-- <a
				href="/{l.code}"
				class="flex w-16 items-center justify-center rounded-lg border p-2 text-center text-sm font-medium no-underline shadow-sm transition hover:bg-gray-100
			{$page.params.lang === l.code
					? 'border-pink-600 bg-pink-500 text-white'
					: 'border-gray-300  text-white'}"
			>
				<span class="mr-1">{l.flag}</span>
				{l.code.toUpperCase()}
			</a> -->
			<a
				href="/{l.code}"
				class="flex w-16 items-center justify-center rounded-lg border p-2 text-center text-sm font-medium no-underline shadow-sm transition hover:bg-gray-100
			{$page.params.lang === l.code
					? 'border-pink-600 bg-pink-500 text-white'
					: 'border-gray-300  text-white'}"
			>
				<!-- <span class="mr-1">{l.flag}</span> -->
				<img src={l.icon} class="rounded-md h-4 w-8" alt="" />
				{l.code.toUpperCase()}
			</a>
		{/each}
	{/if}
</div>
