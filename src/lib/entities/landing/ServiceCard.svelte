<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { service } = $props();

	let { image, title, avif } = service;
</script>

<div
	role="listitem"
	class="splide__slide servicesPl-item group
            mx-2 transform transition duration-300 hover:scale-110"
>
	<div
		style="  background-image: url({avif});
"
		class="services_cards w-inline-block relative"
	>
		<h2
			class=" font-poppins services_cards-heading mx-auto text-left font-black uppercase text-white group-hover:text-rose-300"
		>
			{title}
		</h2>
		<div
			class="absolute inset-0 bg-black bg-black opacity-30 transition-opacity duration-300 group-hover:opacity-70"
		></div>
		<!-- <div class="services_cards-button">
			<div class="icon-embed-xxsmall w-embed">
				<svg
					width=" 100%"
					height=" 100%"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0.923077 3.37175e-07L0.923077 1.84615L8.85231 1.84615L0 10.6985L1.30154 12L10.1538 3.14769V11.0769H12V0L0.923077 3.37175e-07Z"
						fill="currentColor"
					></path>
				</svg>
			</div>
		</div> -->
		<!-- <div class="services_cards_overlay"></div> -->
	</div>
</div>

<style lang="postcss">
	.services_cards-heading {
		position: relative;
		z-index: 1;

		transform: rotate(90deg);
		transform-origin: top left;
		font-size: 2rem;
		line-height: 1.05;
		position: relative;
		display: inline-block;
	}
	@media screen and (min-width: 991px) {
		.services_cards-heading {
			top: -360px;
			right: -140px;
		}
		.services_cards-heading.text-weight-medium {
			font-weight: 500;
		}
	}
	@media screen and (max-width: 991px) {
	}
	@media screen and (max-width: 767px) {
	}

	@media screen and (max-width: 479px) {
	}

	@media screen and (max-width: 767px) {
		.services_cards-heading {
			font-size: 2.25rem;
			top: -360px;
			right: -100px;
		}
	}
</style>
