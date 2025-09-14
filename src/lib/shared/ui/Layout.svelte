<script lang="ts">
	// import { Header, Footer } from '$widgetsLanding';
	// import {navigationPl, categories, boardgamesList } from '$sharedData';
	import '../../../app/app.css';

	let { children } = $props();
</script>

<div class="">
	<!-- <Header {navigation} {boardgamesList}/> -->

	<main>
		{@render children()}
	</main>

	<!-- <Footer {navigation} {categories}/> -->
</div>

<style lang="postcss">
</style>
