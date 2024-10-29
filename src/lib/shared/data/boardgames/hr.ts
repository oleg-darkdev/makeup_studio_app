const boardgame = {
	id: 2,
	title: 'HR puzzle',
	linkLanding: 'https://hr-puzzle.vercel.app/',
	linkApp: '/',
	promoVideo: '',
	github: 'https://github.com/oleg-darkdev/hr-puzzle_app',
	icon: '/images/icons/hr_puzzle.svg',
	logo: '/images/logos/hr_puzzle.svg',
	logoDark: '/images/logos/hr_puzzle_black.svg',
	iconDark: '/images/icons/hr_puzzle_black.svg',
	logoWhite: '/images/logos/hr_puzzle.svg',
	iconWhite: '/images/icons/hr_puzzle.svg',

	iconUrl:
		'https://raw.githubusercontent.com/oleg-darkdev/puzzle-management_app/refs/heads/main/static/images/icons/hr_puzzle.svg',
	logoUrl:
		'https://raw.githubusercontent.com/oleg-darkdev/puzzle-management_app/refs/heads/main/static/images/logos/hr_puzzle.svg',
	logoDarkUrl:
		'https://raw.githubusercontent.com/oleg-darkdev/puzzle-management_app/refs/heads/main/static/images/logos/hr_puzzle_black.svg',
	iconDarkUrl:
		'https://raw.githubusercontent.com/oleg-darkdev/puzzle-management_app/refs/heads/main/static/images/icons/hr_puzzle_black.svg',
	logoWhiteUrl:
		'https://raw.githubusercontent.com/oleg-darkdev/puzzle-management_app/refs/heads/main/static/images/logos/hr_puzzle.svg',
	iconWhiteUrl:
		'https://raw.githubusercontent.com/oleg-darkdev/puzzle-management_app/refs/heads/main/static/images/icons/hr_puzzle.svg',

	freeValueForReplace: '',
	miniFaq: '',
	api: 'https://puzzle-management.vercel.app/api/hr-puzzle',
	progress: { app: 0, boardgame: 0, landing: 0 },
	tags: ['HR', 'Motywacje i cele', 'Rekrutacja', 'Przywództwo', 'Informacja zwrotna'],
	type: 'Kooperacyjna gra edukacyjna',
	age: '12+',
	features: [
		{
			title: 'Lorem Ipsum has',
			desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
		},
		{
			title: 'Lorem Ipsum has',
			desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
		},
		{
			title: 'Lorem Ipsum has',
			desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
		}
	],
	amountPlayers: {
		min: 2,
		max: 2
	},
	durationGame: {
		min: 10,
		max: 20
	},
	durationWorkshop: {
		min: 40,
		max: 80
	},
	pricing: {
		box: '40',
		subscription: '8'
	},
	shortDesc:
		'Grywalizacja, która pomaga zespołowi określić, na ile motywacje zespołu I nowego kandydata są do siebie podobne.',
	desc: [
		'',
		'',
		"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	],
	gallery: [
		{ caption: '', img: '' },
		{ caption: '', img: '' },
		{ caption: '', img: '' },
		{ caption: '', img: '' },
		{ caption: '', img: '' }
	]
};

export default boardgame;
