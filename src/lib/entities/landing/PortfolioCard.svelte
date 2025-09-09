<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { img, title } = $props();
</script>

<div class="splide__slide splide_carousel-slide">
	<div class="splide_carousel-wrap">
		<div class=" splide_carousel-image-wrap bg-white">
			<img
				loading="lazy"
				width="Auto"
				height="Auto"
				src={img}
				alt={title}
				sizes="(max-width: 479px) 100vw, (max-width: 767px) 58vw, (max-width: 991px) 38vw, 35vw"
				class="splide_carousel-image transform transition
               duration-300 hover:scale-105"
			/>
		</div>
	</div>
</div>

<style lang="postcss">
</style>
