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
</script>

<svelte:head>
	<title>Puzzle Management | Home </title>
	<meta name="description" content="" />
</svelte:head>

<TagsLine />

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
