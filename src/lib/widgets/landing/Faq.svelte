<script lang="ts">
	import { FaqCard } from '$entitiesLanding';

	import LL from '$i18n/i18n-svelte';
</script>

<section id="faq" class="section_faq">
	<div class="padding-global">
		<div class="container-large">
			<div class="padding-section-large">
				<div class="margin-bottom margin-large">
					<div class="section_heading-grid">
						<div class="mb-8">
							<h2 class="heading-style-h2 font-poppins  font-black uppercase">
								{$LL.faq.titleStart()}
								<span class="text-underline-v2 noise-effect">{$LL.faq.titleEnd()}</span>
							</h2>
						</div>
						<div class="button-group is-end tablet-justify-align-start">
							<a href="#contact" class="button is-link w-inline-block">
								<div class="button_icon-wrapper">
									<div>{$LL.faq.button()}</div>
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
				<div class="w-layout-grid faq_component">
					<div class="w-layout-grid faq_list">
						{#each $LL.faq.faq as { q, a }}
							<FaqCard {q} {a} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.faq_list {
		display: grid;
		grid-template-columns: 1fr 1fr; /* две колонки */
		grid-column-gap: 1rem;
		grid-row-gap: 1rem;
		place-items: start stretch;
	}

	.faq_component {
		display: grid;
		grid-template-columns: 1fr; /* пусть тянется */
		position: relative;
	}

	@media screen and (max-width: 991px) {
		.faq_component {
			grid-column-gap: 1rem;
			grid-row-gap: 1rem;
			grid-template-columns: 1fr;
			grid-auto-flow: row;
			min-height: auto;
		}
		.faq_list {
			grid-template-columns: 1fr; /* на мобильных в одну колонку */
		}
	}
</style>
