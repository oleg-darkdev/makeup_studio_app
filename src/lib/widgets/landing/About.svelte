<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
    import { CountUp } from 'countup.js';

	$effect(() => {
        const boardgamesCountUp = new CountUp('boardgamesStat', 18, { enableScrollSpy: true, duration: 6 }),
            expCountUp = new CountUp('expStat', 6, { enableScrollSpy: true, duration: 10 });
	});

	let { categories } = $props();
</script>

<section class="hero-about-section section-spacing">
	<a name="about"></a>
	<div class="w-layout-blockcontainer container-full w-container">
		<div class="section-title inner-container text-center">
			<div class="sub-title-wrap center">
				<img
					src="images/66d0464eec8062a3c7b9f083_icon-10.svg"
					loading="lazy"
					alt=""
					class="sub-title-icon"
				/>
				<div>. O projekcie</div>
			</div>
			<h2>Ułóż zarządzanie, <br /> jak puzzle.</h2>
			<!-- <a href="/" class="button-link">more about us</a> -->
		</div>
		<div class="w-layout-grid grid-about">
			<div class="hero-about-content">
				<div class="section-title">
					<h3 class="heading-h4">
						Witamy w środowisku, w którym zarządzanie przypomina układanie
						puzzli!
					</h3>
				</div>
				<p>
					Puzzle Management to unikalny projekt edukacyjny, który łączy 18 edukacyjnych gier
					planszowych w celu kształtowania kluczowych umiejętności menedżerskich.
				</p>
				<div class="about-list">
					{#each categories as { title, anchor }}
						<a href="#{anchor}" class="no-underline">
							<div class="hero-about-counter-item"><span>{title}</span></div>
						</a>
					{/each}
				</div>
			</div>
			<div class="about-image-wrap">
				<img src="/images/gradient-about.svg" loading="lazy" alt="" class="about-image-shape" />
				<img src="/images/illustration-about.svg" loading="lazy" alt="" class="about-image" />
			</div>
			<div>
				<p class="margin-bottom-36">
					Dzięki nam zbudujesz solidne podstawy samoorganizującego się zespołu, poprawisz
					komunikację i osiągniesz cele biznesowe sposób grywalizowany i z zapałem!
				</p>
				<div class="w-layout-grid grid-counter">
					<div>
						<h2><span id='expStat'></span>+</h2>
						<div>. Lat doświadczenia</div>
					</div>
					<div class="text-right">
						<h2><span id='boardgamesStat'></span>+</h2>
						<div>. Narzędzi edukacyjnych</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
</style>
