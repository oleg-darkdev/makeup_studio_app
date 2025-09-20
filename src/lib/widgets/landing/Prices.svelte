<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	import { PriceCard } from '$entitiesLanding';

	import LL from '$i18n/i18n-svelte';
</script>

<section class="section_testimonial">
	<div class="padding-global">
		<div class="container-large">
			<div class="padding-section-large">
				<div class="margin-bottom margin-large">
					<h2 class="heading-style-h2 mb-8 font-poppins max-w-4xl font-black uppercase">
						{$LL.prices.titleStart()}
						<span class="text-underline-v4  noise-effect">{$LL.prices.titleEnd()}</span>
					</h2>
				</div>
				<div class="cms_collection-wrapper w-dyn-list">
					<div role="list" class="cms_list w-dyn-items">
						{#each $LL.prices.data as price}
							<PriceCard {price} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
</style>
