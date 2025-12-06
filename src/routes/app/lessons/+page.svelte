<script lang="ts">
	import { fade } from 'svelte/transition';
	import { LessonsList } from '$widgetsApp';
	import { ProgramCard } from '$entitiesApp';

	import { programAppRu, DB } from '$sharedData';
	import { unlockBlocksPerWeek, mergeAndSplitLessons } from '$sharedUtils';

	// const totalLessons = DB.reduce((acc, block) => acc + block.lessons.length, 0); // 40 количество уроков
	// const daysPerLesson = 90 / totalLessons; // 2.25 дней нужно пройти для открытия следующего урока
	// console.log(daysPerLesson)
	// console.log(totalLessons)

	let lessonCounter = 0;

	const userStartDate = '2025-10-01'; // сохранять в бд вместе с данными для авторизации
	const DBWithAccess = unlockBlocksPerWeek(DB, userStartDate);

	const openBlocks = DBWithAccess.filter((block) => block.available);
	const closedBlocks = DBWithAccess.filter((block) => block.available == false);

	// console.log(openBlocks);
	// console.log(closedBlocks);

	// Пример использования
	const { availableLessons, unavailableLessons } = mergeAndSplitLessons(
		programAppRu.courseData,
		DB
	);

	let { program } = $props();

	// console.log('Доступные уроки:', availableLessons);
	// console.log('Недоступные уроки:', unavailableLessons);
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
								<span class="text-underline-v6"
									>В данный момент вам доступны следующие уроки ({availableLessons.length}):</span
								>
							</h2>
						</div>

						<section class="overflow-hidden">
							<div class="mx-auto">
								<div class="container-large">
									<div class="padding-section-large">
										<div class="mx-auto flex max-w-xl flex-row flex-wrap gap-4">
											<!-- $LL.program.courseData -->
											{#each availableLessons as stage}
												<ProgramCard {stage} />
											{/each}
										</div>
										<!-- <img
							src="images/course-info-diamond-3.svg"
							loading="lazy"
							alt="Diamond"
							class="faq_object-heart"
						/> -->
										<img
											src="images/course-info-diamond-1.svg"
											loading="lazy"
											alt="Diamond"
											class="faq_object-diamond-1"
										/>
										<img
											src="images/course-info-diamond-2.svg"
											loading="lazy"
											alt="Diamond"
											class="faq_object-diamond-2"
										/>
									</div>
								</div>
							</div>
						</section>
						<div class="z-index-2 mb-10">
							<h2 class="text-color-pink font-poppins font-black uppercase">
								<span class="text-underline-v6"
									>Полный сПИСЛК УРОКОВ ({unavailableLessons.length})</span
								>
							</h2>
						</div>

						<section class="overflow-hidden">
							<div class="mx-auto">
								<div class="container-large">
									<div class="padding-section-large">
										<div class="mx-auto flex max-w-xl flex-row flex-wrap gap-4">
											<!-- $LL.program.courseData -->
											{#each unavailableLessons as stage}
												<ProgramCard {stage} />
											{/each}
										</div>
										<!-- <img
							src="images/course-info-diamond-3.svg"
							loading="lazy"
							alt="Diamond"
							class="faq_object-heart"
						/> -->
										<img
											src="images/course-info-diamond-1.svg"
											loading="lazy"
											alt="Diamond"
											class="faq_object-diamond-1"
										/>
										<img
											src="images/course-info-diamond-2.svg"
											loading="lazy"
											alt="Diamond"
											class="faq_object-diamond-2"
										/>
									</div>
								</div>
							</div>
						</section>

						<img src="/images/cta-lines.svg" loading="lazy" alt="waves" class="cta_object-lines" />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.cta_image-button-wrap-next {
		text-align: right;
		justify-content: flex-end;
		display: flex;
		position: absolute;
		inset: auto 12rem -3rem auto;
	}

	.cta_image-button-wrap-next:disabled {
		opacity: 0.4;
		pointer-events: none;
	}

	.cta_image-button-wrap-prev {
		text-align: right;
		justify-content: flex-end;
		display: flex;
		position: absolute;
		inset: auto 4rem -3rem auto;
	}

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
