<script lang="ts">
	// import {} from '$sharedData';
	// import {} from '$sharedUi';
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
		Instagram
	} from '$widgetsLanding';
	// import { SEO } from '$sharedUtils';
</script>

<svelte:head>
	<title>| Home</title>
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

		<CTA />

		<Instagram />

		<!-- faq? -->

		<GiveGift />
	</main>

	<Footer />
</div>
