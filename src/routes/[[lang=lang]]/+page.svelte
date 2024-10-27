<script lang="ts">
	// import { SEO } from '$sharedUtils';
	import { boardgamesList, categories } from '$sharedData';
	import { LineDivider, BigContaciDivider, SmallContaciDivider } from '$sharedUi';
	import {
		LinkinBio,
		Services,
		TagsLine,
		About,
		Gallery,
		Stats,
		Faq,
		FullWidthBanner,
		Features,
		Instructions,
		PleaseEnterPassword,
		BestBoardgames,
		Blog,
		ColourfulSection,
		ContactForm,
		BoardgamesList,
		Price,
		Team,
		FreeFirst,
		OurMission
	} from '$widgetsLanding';
</script>

<svelte:head>
	<title>Puzzle Management | Home </title>
	<meta name="description" content="" />
</svelte:head>


<!-- <SEO title="Home" /> -->

<!-- <TagsLine /> -->

<About {categories}/>

<!-- <Stats /> -->

<LineDivider />

<OurMission />

<LineDivider />

<Features {categories}/>

<SmallContaciDivider />

<!-- <LineDivider /> -->

<BoardgamesList {categories} />

<LineDivider />



<!-- <ColourfulSection /> -->


<!-- <LineDivider /> -->

<!-- <BestBoardgames /> -->

<!-- <LineDivider /> -->

<!-- <Price /> -->

<!-- <Services /> -->

<!-- <BigContaciDivider /> -->

<Faq />



<style lang="postcss">
</style>
