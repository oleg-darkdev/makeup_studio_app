


function unlockBlocksPerWeek(DB, startDate) {
	const now = new Date();
	const weeksPassed = Math.floor((now - new Date(startDate)) / (1000 * 60 * 60 * 24 * 7)); // сколько недель прошло

	// console.log(weeksPassed)

	return DB.map((block, index) => {
		const isAvailable = index <= weeksPassed; // блоки открываются по порядку

		return {
			...block,
			available: isAvailable,
			lessons: block.lessons.map((lesson) => ({
				...lesson,
				available: isAvailable // все уроки блока открываются вместе с блоком
			}))
		};
	});
}


export default unlockBlocksPerWeek;
