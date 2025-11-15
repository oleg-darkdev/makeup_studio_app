<script lang="ts">
	import { selectedPrice, step } from '$sharedStores';
	import { findPriceById } from '$sharedUtils';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';
	import LL from '$i18n/i18n-svelte';
	import { pricesEn, pricesEs, pricesRu, pricesFr, pricesDe, pricesPl } from '$sharedData';

	let lang = get(page).url.pathname.split('/').pop() || 'en';

	function currentPrices(langPage) {
		switch (langPage) {
			case 'en':
				return pricesEn.data;
			case 'es':
				return pricesEs.data;
			case 'ru':
				return pricesRu.data;
			case 'fr':
				return pricesFr.data;
			case 'ge':
				return pricesDe.data;
			case 'pl':
				return pricesPl.data;
			default:
				return pricesEn.data;
		}
	}

	const selectedPlan = findPriceById(currentPrices(lang), $selectedPrice);

	const tildLink = selectedPlan.tilda;

	async function handleCheckout(priceId, lang) {
		const res = await fetch('/api/checkout', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ priceId, lang, tildLink })
		});

		const data = await res.json();
		if (data.url) window.location.href = data.url;
		else alert(data.error || 'Error creating checkout session');
	}

	let { readyToNextStep } = $props();
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

				<div class="button-group is-end mobile-justify-align-start mt-10">
					<div class="button_image-btn">
						<button
							on:click={() => ($step = $step - 1)}
							class="splide_carousel-service-icon w-embed"
						>
							<svg
								width="100%"
								height="100%"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M15 18L9 12L15 6"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
					</div>
					<button
						on:click={() => handleCheckout($selectedPrice, lang)}
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
