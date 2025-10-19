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
</script>

<!-- <h1 class="mb-4 text-2xl font-bold">Buy the course</h1> -->
<div class="grid gap-4">
	<div class="cms_list-content">
		{#if $selectedPrice}
			<div class="cms_list-content-wrap">
				<div class="margin-bottom margin-small">
					<h4 class=" text-white">Выбранный тип курса: {selectedPlan.title}</h4>
					<h4 class=" border-2px mb-4 border-b text-white">Язык курса: {selectedPlan.title}</h4>

					<h4 class=" text-white">К оплате: {selectedPlan.price} €</h4>
				</div>

				<span class="text-sm text-white"
					>Внимание, для оплаты вы будете перенаправлены на сервис stripe</span
				>
				<div class="button-group is-end mobile-justify-align-start">
					<button
						on:click={() => handleCheckout($selectedPrice)}
						class="button noise-effect w-inline-block no-underline"
					>
						Перейти к оплате
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
