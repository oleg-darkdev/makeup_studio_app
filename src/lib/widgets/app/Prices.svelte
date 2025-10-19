<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import { selectedPrice, step } from '$sharedStores';
	import { pricesEn } from '$sharedData';

	let { readyToNextStep } = $props();
</script>

<section class="section_testimonial">
	<div class="cms_collection-wrapper w-dyn-list">
		<div role="list" class="cms_list w-dyn-items">
			<!-- {#if $selectedPrice}
				<h2>Выбранный тарифный    план</h2>
				<p class="text-white">
					{$selectedPrice}
					{$LL.prices.data.find((p) => p.id === $selectedPrice)?.price}
				</p>
			{:else} -->

			<!-- $LL.prices.data -->
			{#each pricesEn.data as price}
				<div
					role="listitem"
					on:click={() => {
						selectedPrice.set(price.priceId);
						readyToNextStep = true;
						$step = $step + 1;
					}}
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
			{/each}
			<!-- {/if} -->
		</div>
	</div>
</section>
