const boardgame = {
	id: 11,
	title: 'Owner puzzle',
	linkLanding: '/',
	linkApp: '/',
	promoVideo: '',
	github: 'https://github.com/oleg-darkdev/',
	icon: '/images/icons/owner_puzzle.svg',
	logo: '/images/logos/owner_puzzle.svg',
	logoDark: '/images/logos/owner_puzzle_black.svg',
	iconDark: '/images/icons/owner_puzzle_black.svg',
	logoWhite: '/images/logos/owner_puzzle.svg',
	iconWhite: '/images/icons/owner_puzzle.svg',

	iconUrl: '',
	logoUrl: '',
	logoDarkUrl: '',
	iconDarkUrl: '',
	logoWhiteUrl: '',
	iconWhiteUrl: '',

	freeValueForReplace: '',
	miniFaq: '',
	api: 'https://puzzle-management.vercel.app/api/owner-puzzle',
	progress: { app: 0, boardgame: 0, landing: 0 },
	tags: [
		'Lorem impsum',
		'Lorem impsum',
		'Lorem impsum',
		'Lorem impsum',
		'Lorem impsum',
		'Lorem impsum',
		'Lorem impsum'
	],
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
		min: 4,
		max: 20
	},
	durationGame: {
		min: 40,
		max: 180
	},
	durationWorkshop: {
		min: 40,
		max: 180
	},
	pricing: {
		box: '40',
		subscription: '8'
	},
	shortDesc:
		'Symulacyjna gra planszowa, w której uczestnicy próbują swoich sił w roli product ownera, uczą się ustalać priorytety backlogów I planować iteracje z wykorzystaniem założeń agile.',
	desc: [
		"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
