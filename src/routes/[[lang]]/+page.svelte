<script lang="ts">
	import { page } from '$app/stores';

	import {
		Footer,
		Header,
		PortfolioCarousel,
		Hero,
		Features,
		Services,
		AboutTrainer,
		CTA,
		CourseProgramm,
		GiveGift,
		FreeBlockFirst,
		Testimonials,
		Faq,
		Instagram,
		Prices
	} from '$widgetsLanding';
	// import { SEO } from '$sharedUtils';
</script>

<svelte:head>
	<title>EYE LINER | {$page.data.locale}</title>
	<meta name="description" content="" />
</svelte:head>

<!-- <SEO title="Home" /> -->

<div class="page-wrapper">
	<Header />

	<main class="main-wrapper">
		<Hero />

		<PortfolioCarousel />

		<!-- <FreeBlockFirst /> -->

		<Services />

		<Features />

		<AboutTrainer />

		<CourseProgramm />

		<Prices />

		<CTA />

		<Instagram />

		<Faq />

		<GiveGift />
	</main>

	<Footer />
</div>
