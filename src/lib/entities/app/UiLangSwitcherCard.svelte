<script lang="ts">
	import { uiAppLang } from '$sharedStores';

	const locales = [
		{ code: 'en', flag: '🇬🇧', icon: '/images/locales/uk_icon.svg' },
		{ code: 'ru', flag: '🇷🇺', icon: '/images/locales/ru_icon.svg' },
		{ code: 'es', flag: '🇪🇸', icon: '/images/locales/es_icon.svg' },
		{ code: 'fr', flag: '🇫🇷', icon: '/images/locales/fr_icon.svg' },
		{ code: 'de', flag: '🇩🇪', icon: '/images/locales/de_icon.svg' },
		{ code: 'pl', flag: '🇵🇱', icon: '/images/locales/pl_icon.svg' }
	];

	let readyToNextStep = false;

	// 🔹 Реактивно отслеживаем uiAppLang
	$effect(() => {
		readyToNextStep = Boolean($uiAppLang);
	});
</script>

<div class="mx-auto grid max-w-md grid-cols-2 gap-4">
	{#if $uiAppLang}
		<h2>Selected language</h2>
		<div>
			{$uiAppLang.toUpperCase()}
			<button on:click={() => ($uiAppLang = null)}>Выбрать другой язык</button>
		</div>
	{:else}
		{#each locales as l}
			<button
				on:click={() => ($uiAppLang = l.code)}
				class="flex w-auto items-center justify-center rounded-lg border p-2 text-center text-6xl font-black no-underline shadow-sm transition hover:bg-gray-100
				{$uiAppLang === l.code ? 'border-pink-600 bg-pink-500 text-white' : 'border-gray-300 text-white'}"
			>
				<img src={l.icon} class="h-20 w-32 rounded-md" alt={l.code} />
				{l.code.toUpperCase()}
			</button>
		{/each}
	{/if}
</div>
