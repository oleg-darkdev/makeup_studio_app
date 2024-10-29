const boardgame = {
	id: 3,
	title: 'Cynefin puzzle',
	linkLanding: 'https://cynefi-puzzle.vercel.app/',
	linkApp: '/',
	promoVideo: '',
	github: 'https://github.com/oleg-darkdev/cynefin_puzzle_app',

	icon: '/images/icons/cynefin_puzzle.svg',
	logo: '/images/logos/cynefin_puzzle.svg',
	logoDark: '/images/logos/cynefin_puzzle_black.svg',
	iconDark: '/images/icons/cynefin_puzzle_black.svg',
	logoWhite: '/images/logos/cynefin_puzzle.svg',
	iconWhite: '/images/icons/cynefin_puzzle.svg',

	iconUrl:
		'https://raw.githubusercontent.com/oleg-darkdev/puzzle-management_app/9afec22a08ce4ba99dc2dddad7dc8f2541538c3a/static/images/icons/cynefin_puzzle_black.svg',
	logoUrl:
		'https://raw.githubusercontent.com/oleg-darkdev/puzzle-management_app/refs/heads/main/static/images/logos/cynefin_puzzle.svg',
	logoDarkUrl:
		'https://raw.githubusercontent.com/oleg-darkdev/puzzle-management_app/refs/heads/main/static/images/logos/cynefin_puzzle_black.svg',
	iconDarkUrl:
		'https://raw.githubusercontent.com/oleg-darkdev/puzzle-management_app/9afec22a08ce4ba99dc2dddad7dc8f2541538c3a/static/images/icons/cynefin_puzzle_black.svg',
	logoWhiteUrl:
		'https://raw.githubusercontent.com/oleg-darkdev/puzzle-management_app/refs/heads/main/static/images/logos/cynefin_puzzle.svg',
	iconWhiteUrl:
		'https://raw.githubusercontent.com/oleg-darkdev/puzzle-management_app/9afec22a08ce4ba99dc2dddad7dc8f2541538c3a/static/images/icons/cynefin_puzzle.svg',

	freeValueForReplace: '',
	miniFaq: '',
	api: 'https://puzzle-management.vercel.app/api/cynefin-puzzle',
	progress: { app: 0, boardgame: 0, landing: 0 },
	tags: ['Agile', 'Waterfall', 'Model Cynefin', 'Podejścia w zarządzaniu', 'Złożone systemy'],
	type: 'Kooperacyjna gra edukacyjna',
	age: '16+',
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
		max: 6
	},
	durationGame: {
		min: 60,
		max: 140
	},
	durationWorkshop: {
		min: 60,
		max: 180
	},
	pricing: {
		box: '40',
		subscription: '8'
	},
	shortDesc: `Gra edukacyjna, która pozwala na głębsze zrozumienie «modelu cynefin» I podejmowania decyzji w zarządzaniu, dając uczestnikom możliwość zbadania różnych praktyk I podejść w zależności od kontekstu, w którym się znajdują.`,
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
