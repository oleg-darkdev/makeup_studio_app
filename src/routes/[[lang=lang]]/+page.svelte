<script lang="ts">
	import { boardgamesList, categories } from '$sharedData';
	import { LineDivider, SmallContaciDivider } from '$sharedUi';
	import {
		About,
		TagsLine,
		Faq,
		Features,
		BoardgamesList,
		OurMission
	} from '$widgetsLanding';
	// import { SEO } from '$sharedUtils';
	// import {
	// 	LinkinBio,
	// 	Services,
	// 	TagsLine,
	// 	About,
	// 	Gallery,
	// 	Stats,
	// 	Faq,
	// 	FullWidthBanner,
	// 	Features,
	// 	Instructions,
	// 	PleaseEnterPassword,
	// 	BestBoardgames,
	// 	Blog,
	// 	ColourfulSection,
	// 	ContactForm,
	// 	BoardgamesList,
	// 	Price,
	// 	Team,
	// 	FreeFirst,
	// 	OurMission
	// } from '$widgetsLanding';
</script>

<svelte:head>
	<title>Puzzle Management | Home </title>
	<meta name="description" content="" />
</svelte:head>

<!-- <SEO title="Home" /> -->

<TagsLine />

<About {categories}/>

<!-- <Stats /> -->

<LineDivider />

<OurMission />

<LineDivider />

<Features {categories}/>

<SmallContaciDivider />

<!-- <LineDivider /> -->

<BoardgamesList {categories} />

<!-- <ColourfulSection /> -->
<!-- <BestBoardgames /> -->
<!-- <Gallery /> -->
<!-- <BestBoardgames /> -->
<!-- <Price /> -->
<!-- <BigContaciDivider /> -->
<!-- <Services /> -->
<LineDivider />

<Faq />

<!-- <Team /> -->

<!-- <FreeFirst /> -->

<!-- <FullWidthBanner /> -->

<!-- <ContactForm /> -->

<!-- <Instructions /> -->

<!-- <PleaseEnterPassword /> -->

<!-- <LinkinBio /> -->


<style lang="postcss">
</style>
