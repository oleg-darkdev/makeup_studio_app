<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';

	import type { Boardgame } from '$sharedTypes';
	import { BoardgameCard, AppCard } from '$entitiesLanding';
	// interface BoardgamesProps {
	// 	boardgamesList: Boardgame[];
	// }

	// let { boardgamesList }: BoardgamesProps = $props();

	let { categories } = $props();

	const boardgamesList = [].concat(
		categories[0].games,
		categories[1].games,
		categories[2].games,
		categories[3].games
	);

	let showInfo = $state(true);
</script>


<section class="work-process-section section-spacing-bottom">
	<div class="w-layout-blockcontainer container-full w-container">

        <a name="boardgames"></a>

		<div class=" work-process-wrap">
			<div class="">
				<div class="section-title">
					<div class="sub-title-wrap">
						<img
							src="images/66d0464eec8062a3c7b9f0ae_icon-20.svg"
							loading="lazy"
							alt=""
							class="sub-title-icon"
						/>
						<div class="text-dark">. Nasza propozycja</div>
					</div>
					<h3 class="text-dark">Lista dostępnych gier planszowych</h3>
				</div>

				<div class="accordion">
					{#each categories as { title, anchor, games, abstractIcon, bgColor }}
						<a name={anchor}></a>
						<div class=" category-wrap mb-4 mt-14">
							<div class="accordion-heading flex flex-row">
								<div class="accordion-title-wrap">
									<img src={abstractIcon} class="h-10" alt="" />
									<!-- <div class="accordion-title-number">.01</div> -->
									<h4 class="accordion-title">{title}</h4>
								</div>
							</div>
						</div>

						{#each games as boardgame : Boardgame (boardgame.id)}
							<BoardgameCard {boardgame} />
						{/each}
					{/each}
				</div>
			</div>
			<div class="career-title-sticky">
				<AppCard {boardgamesList}/>
			</div>
		</div>
	</div>
</section>


<style lang="postcss">
	.category-wrap {
		/* border: 1px solid var(--color--border-color);
	border-radius: var(--border-radius--border-radius); */
		color: var(--color--black);
		/* padding: 15px; */
	}

	.category-icon {
		/* background-image: url('/images/feature_2_abstract.svg'); */
		background-position: 50%;
		background-repeat: no-repeat;
		background-size: auto;
		justify-content: center;
		align-items: center;
		width: 60px;
		height: 61px;
		margin-bottom: 20px;
		display: flex;
	}

	.category-icon.three {
		background-image: url('/images/feature_3_abstract.svg');
	}

	.category-icon.four {
		background-image: url('/images/feature_4_abstract.svg');
	}

	.category-icon.one {
		background-image: url('/images/feature_2_abstract.svg');
	}
</style>
