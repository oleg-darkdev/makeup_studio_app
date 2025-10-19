<script lang="ts">
	// import { fade } from 'svelte/transition';
	import { LessonsList } from '$widgetsApp';
</script>

<section class="section_cta">
	<div class="padding-global">
		<div class="container-large">
			<div class="padding-section-large">
				<!--  -->
				<div class="w-layout-grid cta_component noise-effect">
					<!-- app_wrap -->
					<div class="app_wrap mx-auto max-w-4xl">
						<div class="z-index-2 mb-10">
							<h2 class="text-color-pink font-poppins font-black uppercase">
								<span class="text-underline-v6">Список доступных уроков</span>
							</h2>
						</div>

						<LessonsList />

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
