<script lang="ts">
	import { Header, Footer } from '$widgetsLanding';
	import { navigation, categories } from '$sharedData';
	import '../../../app/app.css';

	let { children } = $props();
</script>

<div class="page-wrapper">
	<Header {navigation}/>

	<main>
		{@render children()}
	</main>

	<Footer {navigation} {categories}/>
</div>
<div class="bg-gradient"></div>

<style lang="postcss">
</style>
