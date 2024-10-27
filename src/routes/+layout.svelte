
<!-- <Layout>
	{@render children?.()}
</Layout> -->


<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	// import { invalidate } from '$app/navigation';
	// import { Layout } from '$sharedUi';

	type Props = {
		data: LayoutData;
		children: Snippet; 
	};

	let { data, children }: Props = $props();

	// $effect(() => {
	// 	const result = data.supabase.auth.onAuthStateChange((event, _session) => {
	// 		if (_session?.expires_at !== data.session?.expires_at) {
	// 			invalidate('supabase:auth');
	// 		}
	// 	});

	// 	return () => result.data.subscription.unsubscribe();
	// });

	import { Header, Footer } from '$widgetsLanding';
	import { navigation, categories } from '$sharedData';
	import '../app/app.css';
	// app/app.css

	// let { children } = $props();
</script>

<div class="page-wrapper">
	<!-- <Header {navigation}/> -->

	<main>
		{@render children?.()}
	</main>

	<!-- <Footer {navigation} {categories}/> -->
</div>
<div class="bg-gradient"></div>

<style lang="postcss">
</style>
