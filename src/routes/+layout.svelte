<script lang="ts">
	import LL, { setLocale } from '$i18n/i18n-svelte';

	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import { invalidate } from '$app/navigation';
	import { Layout } from '$sharedUi';

	type Props = {
		data: LayoutData;
		children: Snippet;
	};

	let { data, children }: Props = $props();

	// at the very top, set the locale before you access the store and before the actual rendering takes place
	setLocale(data.locale);

	// console.log(data)

	// $effect(() => {
	// 	const result = data.supabase.auth.onAuthStateChange((event, _session) => {
	// 		if (_session?.expires_at !== data.session?.expires_at) {
	// 			invalidate('supabase:auth');
	// 		}
	// 	});

	// 	return () => result.data.subscription.unsubscribe();
	// });
</script>

<svelte:head>
	<title></title>
	<!-- <html lang={data.locale} /> -->
	<!-- <HeadHrefLangs /> -->
</svelte:head>

<div class="page-wrapper">
	<Layout>
		{@render children?.()}
	</Layout>
</div>
