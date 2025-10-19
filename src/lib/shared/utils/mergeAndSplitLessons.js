function mergeAndSplitLessons(courseData, DB) {
	const availableLessons = [];
	const unavailableLessons = [];

	courseData.forEach((module) => {
		const dbBlock = DB.find((b) => b.idBlock == module.idBlock);
		if (!dbBlock) return;

		module.lessons.forEach((lesson) => {
			// Найти соответствующий урок в DB
			const dbLesson = dbBlock.lessons.find(
				(l) =>
					(l.lessonId && lesson.idLesson && l.lessonId == lesson.idLesson) ||
					(l.lessonId && !lesson.idLesson && l.lessonId == l.lessonId)
			);

			const mergedLesson = {
				...lesson,
				completed: dbLesson ? dbLesson.completed : false,
				source: dbLesson ? dbLesson.source : '',
				link: dbLesson ? dbLesson.link : '',
				available: dbBlock.available
			};

			if (mergedLesson.available) {
				availableLessons.push(mergedLesson);
			} else {
				unavailableLessons.push(mergedLesson);
			}
		});
	});

	return { availableLessons, unavailableLessons };
}



export default mergeAndSplitLessons;