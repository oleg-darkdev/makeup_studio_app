<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
	let { categories } = $props();
</script>

<section class="about-section section-spacing">
	<div class="w-layout-blockcontainer container-full w-container">
		<div class="section-title">
			<div class="sub-title-wrap">
				<img src="/images/innovation-icon.svg" loading="lazy" alt="" class="sub-title-icon" />
				<div>. Lorem Ipsum is simply dummy</div>
			</div>
			<h2 class="service-section-title">Ulepsz swoje zarządzanie</h2>
		</div>
		<div class="w-layout-grid grid-service">
			{#each categories as { title, anchor, shortDesc, icon, features, games, bgColor }}
				<a href="#{anchor}" class="service-item w-inline-block">
					<div class="service-icon-wrap {bgColor}">
						<img src={icon} loading="lazy" alt="" class="service-icon" />
					</div>
					<div class="margin-bottom-28">
						<h2 class="heading-h5">{title}</h2>
						<p class="service-description">
							{shortDesc}
						</p>
					</div>
					<div class="list-style service-list">
						{#each features as feature}
							<div class="list-style-item">. {feature}</div>
						{/each}
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style lang="postcss">
</style>
