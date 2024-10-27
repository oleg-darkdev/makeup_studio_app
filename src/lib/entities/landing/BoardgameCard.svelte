<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities';
	import type { Boardgame } from '$sharedTypes';
	interface BoardgameProps {
		boardgame: Boardgame;
	}

	let { boardgame }: BoardgameProps = $props();

	let showInfo = $state(false);

	let isHovered = $state(false);
</script>

<div
	class="accordion-wrap group transition delay-150 duration-300 ease-in-out xl:hover:translate-x-16 lg:hover:translate-x-16 md:hover:translate-x-16 hover:translate-x-4"
	onmouseenter={() => (isHovered = true)}
	onmouseleave={() => (isHovered = false)}
>
	<button type="button" class="mb-6 flex flex-col" onclick={() => (showInfo = !showInfo)}>
		<div class="accordion-heading flex flex-row">
			<div class="accordion-title-wrap">
				<!-- <div class="accordion-title-number">.01</div> -->
				<!-- iconDark -->
				<img src={isHovered ? boardgame.icon : boardgame.iconDark} alt="" class="h-12" />
				<!-- <div class="h-8 h-8"></div> -->
				<!-- group-hover:text-pink-600 -->
				<h4 class="accordion-title">{boardgame.title}</h4>
			</div>
			<img src="images/plus-icon.svg" loading="lazy" alt="" class="accordion-icon" />
		</div>
		{#if showInfo}
			<img
				src={isHovered ? boardgame.logo : boardgame.logoDark}
				alt="{boardgame.title} logo mt-8"
				class="w-full"
			/>

			<div class="about-list">
				{#each boardgame.tags as tag}
					<div class="hero-about-counter-item">{tag}</div>
				{/each}
			</div>
		{/if}

		<p class="accordion-border-description mt-6 text-left">
			{boardgame.shortDesc}
		</p>
	</button>

	{#if showInfo}
		<div style="" class="accordion-content">
			<div class="accordion-border-content">
				<div class="layout-grid grid-boardgame-content">
					<div class="boardgame-item">
						<h6 class="boardgame-location-title">Rodzaj gry</h6>
						<div>{boardgame.type}</div>
					</div>
					<div class="boardgame-item">
						<h6 class="boardgame-location-title">Wiek</h6>
						<div>{boardgame.age}</div>
					</div>
				</div>

				<div class="layout-grid grid-boardgame-content mb-12">
					<div class="boardgame-item">
						<h6 class="boardgame-location-title">Czas rozgrywki</h6>
						<div class="">
							<div>{boardgame.durationGame.min} - {boardgame.durationGame.max} minut</div>
						</div>
					</div>
					<div class="boardgame-item">
						<h6 class="boardgame-location-title">Czas warsztatu</h6>
						<div class="">
							<div>{boardgame.durationWorkshop.min} - {boardgame.durationWorkshop.max} minut</div>
						</div>
					</div>
				</div>

				<div class="mb-12">
					{#each boardgame.features as { title, desc }}
						<div class="boardgame-requirement mb-2">
							<h6 class="boardgame-location-title">{title}</h6>
							<!-- w-list-unstyled -->
							<ul role="list" class="service-lists-wrap">
								<li class="boardgame-list-item">
									<span class="service-list-icon"> </span>
									{desc}
								</li>
							</ul>
						</div>
					{/each}
				</div>

				<h6 class="boardgame-location-title">Opis</h6>
				{#each boardgame.desc as text}
					<p class="accordion-border-description">
						{text}
					</p>
				{/each}

				<div class="mb-12">
					<div class="boardgame-requirement mb-2">
						<h6 class="boardgame-location-title">F.A.Q.</h6>
						<!-- w-list-unstyled -->
						{#each boardgame.miniFaq as { q, a }}
							<ul role="list" class="service-lists-wrap accordion-border-description">
								<li class="boardgame-list-item">
									<span class="service-list-icon"> </span>
									<span>{q}</span>
									{#each a as asnwer}
										<p class="mb-2">
											{asnwer}
										</p>
									{/each}
								</li>
							</ul>
						{/each}
					</div>
				</div>

				{#if boardgame.linkLanding.length > 3}
					<a href={boardgame.linkLanding} target="_blank" class="button-white w-button"
						>Strona www</a
					>
				{/if}
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
	.accordion-wrap {
		border: 1px solid var(--color--border-color);
		border-radius: var(--border-radius--border-radius);
		color: var(--color--black);
		padding: 15px;
	}

	.service-list-icon {
		background-image: url('/images/black_star.svg');
		background-position: 0 0;
		background-repeat: no-repeat;
		background-size: contain;
		margin-right: 10px;
		padding: 10px;
	}

	.layout-grid {
		grid-row-gap: 16px;
		grid-column-gap: 16px;
		grid-template-rows: auto auto;
		grid-template-columns: 1fr 1fr;
		grid-auto-columns: 1fr;
		display: grid;
	}

	.grid-boardgame-content {
		grid-column-gap: 30px;
		grid-row-gap: 30px;
		grid-template-rows: auto;
		grid-template-areas: '.';
		width: 100%;
		margin-bottom: 30px;
	}

	.boardgame-requirement {
	}

	@media screen and (max-width: 479px) {
		.grid-boardgame-content {
			grid-template-rows: auto auto;
			grid-template-columns: 1fr;
		}
	}
</style>
