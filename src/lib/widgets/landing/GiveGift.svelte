<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	import LL from '$i18n/i18n-svelte';
</script>

<section id="gift" class="section_giftcard">
	<div class="padding-global">
		<div class="container-large">
			<div class="padding-section-medium">
				<div class="w-layout-grid giftcard-component">
					<div class="single_testimonial-heading">
						<div class="mb-6">
							<!-- Give the -->
							<h2 class="uppercase heading-style-h2 font-poppins font-black">
								{$LL.gift.titleStart()}
								<span class="text-color-pink noise-effect">{$LL.gift.titleEnd()}</span>
							</h2>
						</div>
						<!-- <img
							src="images/testimonial-diamond-1.svg"
							loading="lazy"
							alt="Diamond"
							class="popup_object-1"
						/>
						<img
							src="images/testimonial-diamond-2.svg"
							loading="lazy"
							alt="Diamond"
							class="popup_object-2"
						/> -->

						<div class="margin-bottom">
							<p class="text-bold font-poppins text-lg">
								{$LL.gift.descriptionStart()}
								<span class="text-underline-v1 noise-effect"> EYE LINER</span>
								{$LL.gift.descriptionEnd()}
								<!-- Get an  gift card for yourself or gift one to a friend! -->
							</p>
						</div>
					</div>
					<div class="giftcard-col">
						<div class="button-group is-end mobile-justify-align-start">
							<a href="/" target="_blank" class="button noise-effect w-inline-block no-underline">
								<!-- Purchase Now -->
								<div>{$LL.gift.button()}</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	@media screen and (max-width: 991px) {
	}
	@media screen and (max-width: 767px) {
	}

	@media screen and (max-width: 479px) {
	}
</style>
