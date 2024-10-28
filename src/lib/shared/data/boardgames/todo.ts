const boardgame = {
	id: 16,
	title: 'todo puzzle',
	linkLanding: '/',
	linkApp: '/',
	promoVideo: '',
	github: 'https://github.com/oleg-darkdev/',
	icon: '/images/icons/todo_puzzle.svg',
	logo: '/images/logos/todo_puzzle.svg',
	logoDark: '/images/logos/todo_puzzle_black.svg',
	iconDark: '/images/icons/todo_puzzle_black.svg',
	logoWhite: '/images/logos/todo_puzzle.svg',
	iconWhite: '/images/icons/todo_puzzle.svg',

	iconUrl:
		'https://raw.githubusercontent.com/oleg-darkdev/puzzle-management_app/refs/heads/main/static/images/icons/todo_puzzle.svg',
	logoUrl:
		'https://raw.githubusercontent.com/oleg-darkdev/puzzle-management_app/refs/heads/main/static/images/logos/todo_puzzle.svg',
	logoDarkUrl:
		'https://raw.githubusercontent.com/oleg-darkdev/puzzle-management_app/refs/heads/main/static/images/icons/todo_puzzle_black.svg',
	iconDarkUrl:
		'https://raw.githubusercontent.com/oleg-darkdev/puzzle-management_app/refs/heads/main/static/images/logos/todo_puzzle_black.svg',
	logoWhiteUrl:
		'https://raw.githubusercontent.com/oleg-darkdev/puzzle-management_app/refs/heads/main/static/images/logos/todo_puzzle.svg',
	iconWhiteUrl:
		'https://raw.githubusercontent.com/oleg-darkdev/puzzle-management_app/refs/heads/main/static/images/icons/todo_puzzle.svg',

	freeValueForReplace: '',
	miniFaq: '',
	api: 'https://puzzle-management.vercel.app/api/todo-puzzle',
	progress: { app: 0, boardgame: 0, landing: 0 },
	tags: [
		'Kanban',
		'Ograniczenie W.I.P.',
		'Wizualizacja pracy',
		'Iteracyjne podejście',
		'Monitorowanie postępu',
		'Koordynacja działań'
	],
	type: 'Kooperacyjna gra edukacyjna',
	age: '14+',
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
		max: 8
	},
	durationGame: {
		min: 80,
		max: 120
	},
	durationWorkshop: {
		min: 80,
		max: 140
	},
	pricing: {
		box: '40',
		subscription: '8'
	},
	shortDesc:
		'Uproszczona wersja «kanban» do symulacji I zrozumienia podstawowych zasad takiego podejścia do organizacji pracy.',
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
