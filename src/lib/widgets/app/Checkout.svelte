<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
	import { selectedPrice } from '$sharedStores';
	import { findPriceById } from '$sharedUtils';
	import { pricesEn } from '$sharedData';

	const selectedPlan = findPriceById(pricesEn.data, $selectedPrice);

	// console.log(selectedPlan);

	async function handleCheckout(priceId) {
		const res = await fetch('/api/checkout', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ priceId })
		});

		const data = await res.json();
		if (data.url) window.location.href = data.url;
		else alert(data.error || 'Error creating checkout session');
	}

	let { readyToNextStep } = $props();
	import LL from '$i18n/i18n-svelte';
</script>

<div class="grid gap-4">
	<div class="cms_list-content">
		{#if $selectedPrice}
			<div class="cms_list-content-wrap">
				<div class="margin-bottom margin-small">
					<h4 class=" text-white">
						{$LL.app.checkout.selectedType()}:
						<span class="text-pink-400">{selectedPlan.title}</span>
					</h4>
					<h4 class="mb-2 text-white">
						{$LL.app.checkout.language()}: <span class="text-pink-400">{selectedPlan.lang}</span>
					</h4>

					<div class="mb-6 mt-4 h-[2px] w-full rounded-full bg-pink-400"></div>

					<h4 class=" text-white">
						{$LL.app.checkout.toPay()}: <span class="text-pink-400"> {selectedPlan.price} €</span>
					</h4>
				</div>

				<span class="text-sm text-pink-400">{$LL.app.checkout.paymentNotice()}</span>
				<div class="button-group is-end mobile-justify-align-start">
					<button
						on:click={() => handleCheckout($selectedPrice)}
						class="button noise-effect w-inline-block no-underline"
					>
						{$LL.app.checkout.payButton()}
					</button>
				</div>

				<div class="text-rich-text slide-read-more w-richtext">
					<!-- <p class="mb-4 text-white">{selectedPlan.shortDesc}</p> -->
					<!-- {#each $selectedPrice.features as feature}
										<p class="text-color-pink mb-2 flex items-center">
											<img src="images/about_list-pointer.svg" class="mr-4 h-6 w-6" alt="" />
											{feature}
										</p>
									{/each} -->
				</div>
			</div>
		{/if}
	</div>
	<!-- {#each plans as plan}
		<button
			on:click={() => handleCheckout(plan.priceId)}
			class="rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
		>
			{plan.name} — {plan.price}
		</button>
	{/each} -->
</div>

<style lang="postcss">
</style>
