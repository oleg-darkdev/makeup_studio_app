<script lang="ts">
	let { price } = $props();
	import { selectedPrice } from '$sharedStores';

	import LL from '$i18n/i18n-svelte';
</script>

<div
	role="listitem"
	
	class="price-card-app w-dyn-item transform transition duration-300 hover:scale-105"
>
	<div class="cms_list-wrapper">
		<img src={price.img} loading="lazy" alt="" class="cms_list-image" />
	</div>
	<div class="cms_list-content">
		<div class="cms_list-content-wrap">
			<div class="margin-bottom margin-small">
				<h3 class="cms_list-heading text-white">{price.title}</h3>
			</div>
			<div class="text-rich-text slide-read-more w-richtext">
				<p class="mb-4 text-white">{price.shortDesc}</p>

				{#each price.features as feature}
					<p class="text-color-pink mb-2 flex items-center">
						<img src="images/about_list-pointer.svg" class="mr-4 h-6 w-6" alt="" />
						{feature}
					</p>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.price-card-app {
		grid-column-gap: 0rem;
		grid-row-gap: 0rem;
		border: 1px solid var(--off-white);
		border-radius: 8px;
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr;
		grid-auto-columns: 1fr;
		align-items: start;
		min-height: 22.5rem;
		/* transition: height 0.2s linear; */
		display: grid;
		overflow: hidden;
	}

	@media screen and (max-width: 767px) {
		.price-card-app {
			grid-row-gap: 1.5rem;
			grid-template-columns: 1fr;
		}
	}
</style>
