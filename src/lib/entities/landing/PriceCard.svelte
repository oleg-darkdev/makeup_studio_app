<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { price } = $props();
</script>

<div role="listitem" class="cms_list-item w-dyn-item">
	<div id="tooth-gems" class="cms_list-wrapper">
		<img src={price.img} loading="lazy" alt=" Tooth Gems" class="cms_list-image" />
	</div>
	<div class="cms_list-content">
		<div class="cms_list-content-wrap">
			<div class="margin-bottom margin-small">
				<h3 class="cms_list-heading">{price.title}</h3>
			</div>
			<div class="text-rich-text slide-read-more w-richtext">
				<p class="mb-4">
					{price.shortDesc}
				</p>

				{#each price.features as feature}
					<p class="mb-2">
						<img src="images/about_list-pointer.svg" class="mr-4 h-6 w-6" alt="-" />
						{feature}
					</p>
				{/each}
			</div>
			<!-- <a href="#" class="slide-read-more-button read-more-button">Read more</a>
			<a href="#" class="slide-read-more-button read-less-button">Read less</a> -->
		</div>
		<div class="button-group is-end">
			<a href="#" class="button is-link w-inline-block">
				<div class="button_icon-wrapper">
					<div>Book today</div>
					<div class="icon-embed-xxsmall w-embed">
						<svg
							width=" 100%"
							height=" 100%"
							viewBox="0 0 12 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 0.923078H10.1538V8.85231L1.30154 0L0 1.30154L8.85231 10.1538H0.923077V12L12 12L12 0.923078Z"
								fill="currentColor"
							></path>
						</svg>
					</div>
				</div>
				<div class="button_underline"></div>
				<div class="button_underline-fill"></div>
			</a>
		</div>
	</div>
</div>

<style lang="postcss">
</style>
