<script lang="ts">
	import { fade } from 'svelte/transition';
	import LL from '$i18n/i18n-svelte';
</script>

<section class="section_cta">
	<div class="padding-global">
		<div class="container-large">
			<div class="padding-section-large">
				<div transition:fade class="w-layout-grid cta_component noise-effect">
					<div class="app_wrap mx-auto max-w-4xl">
						<div class="z-index-2 mb-10">
							<h2 class="text-color-pink font-poppins font-black uppercase">
								<span class="text-underline-v6">{$LL.app.cancelPayment.title()}</span>
							</h2>

							<p class="mt-10 max-w-lg text-xl text-white">
								{$LL.app.cancelPayment.description()}
							</p>

							<section
								class="mx-auto mt-12 max-w-2xl rounded-2xl bg-neutral-800 p-6 text-white shadow-lg"
							>
								<h2 class="mb-6 text-2xl font-semibold text-pink-400">
									{$LL.app.cancelPayment.nextSteps.title()}
								</h2>

								<div class="space-y-6">
									<div class="flex items-start gap-4">
										<span class="text-2xl">🔁</span>
										<p>
											<strong class="text-pink-300"
												>{$LL.app.cancelPayment.nextSteps.retry.title()}</strong
											>
											— {$LL.app.cancelPayment.nextSteps.retry.desc()}
											<a href="/app" class=" text-pink-400 underline transition"
												>{$LL.app.cancelPayment.nextSteps.retry.linkTitle()}</a
											>.
										</p>
									</div>

									<div class="flex items-start gap-4">
										<span class="text-2xl">🧾</span>
										<p>
											<strong class="text-pink-300"
												>{$LL.app.cancelPayment.nextSteps.checkStatus.title()}</strong
											>
											— {$LL.app.cancelPayment.nextSteps.checkStatus.desc()}
										</p>
									</div>

									<div class="flex items-start gap-4">
										<span class="text-2xl">💬</span>
										<p>
											<strong class="text-pink-300"
												>{$LL.app.cancelPayment.nextSteps.help.title()}</strong
											>
											— {$LL.app.cancelPayment.nextSteps.help.desc()}
										</p>
									</div>
								</div>
							</section>
							<div class="button-group is-end mobile-justify-align-start mt-16">
								<a href="/" class="button noise-effect w-inline-block no-underline">
									{$LL.app.cancelPayment.buttons.home()}
								</a>
								<a href="/app" class="button noise-effect w-inline-block no-underline">
									{$LL.app.cancelPayment.buttons.plans()}
								</a>
							</div>
						</div>

						<img src="images/cta-lines.svg" loading="lazy" alt="waves" class="cta_object-lines" />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.app_wrap {
		/* background-color: var(--pink); */
		color: var(--main-black);
		border-radius: 16px;
		border: 2px var(--pink) solid;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 25rem;
		padding: 3rem;
		position: relative;
	}
</style>
