<script lang="ts">
	import { boardgamesList, categories } from '$sharedData';
	import { LineDivider, SmallContaciDivider } from '$sharedUi';
	import {
		About,
		Faq,
		Features,
		BoardgamesList,
		OurMission
	} from '$widgetsLanding';
</script>

<svelte:head>
	<title>Puzzle Management | Home </title>
	<meta name="description" content="" />
</svelte:head>


<About {categories}/>

<LineDivider />

<OurMission />

<LineDivider />

<Features {categories}/>

<SmallContaciDivider />

<BoardgamesList {categories} />

<LineDivider />

<Faq />


<style lang="postcss">
</style>
