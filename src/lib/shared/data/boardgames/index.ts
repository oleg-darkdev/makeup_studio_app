// import coffee from './coffee_Lead';
// import hr from './hr';
// import fileName from './fileName';
// import fileName from './fileName';
// import fileName from './fileName';
// import fileName from './fileName';

import coffee from './coffee';
import hr from './hr';
import cynefin from './cynefin';
import delay from './delay';
import delegation from './delegation';
import health from './health';
import holacrat from './holacrat';
import kanban from './kanban';
import multitasking from './multitasking';
import org from './org';
import owner from './owner';
import pizza from './pizza';
import pomodoro from './pomodoro';
import roles from './roles';
import scrum from './scrum';
import todo from './todo';
import wip from './todo';
import coreCards from './coreCards';



import pm from './pm';


// logo icon logoDark iconDark logoWhite iconWhite
const boardgamesList = [
	coffee,
	hr,
	cynefin,
	delay,
	delegation,
	health,
	holacrat,
	kanban,
	multitasking,
	org,
	owner,
	pizza,
	pomodoro,
	roles,
	scrum,
	todo,
	wip,
	coreCards
];

const categories = [
	{
		title: 'Управление',
		id: 100,
		bgColor: 'one',
		abstractIcon: 'images/feature_1_abstract.svg',
		anchor: 'management',
		shortDesc:
			'развивают навыки эффективного управления и лидерства, помогая пользователям освоить стратегическое планирование, постановку целей и организацию рабочих процессов',
		icon: 'images/star_icon-5.svg',
		features: [
			'Построение стратегического мышления',

			'Решение комплексных задач ',
			'Оптимизация процессов '
		],
		games: [cynefin, delegation, holacrat, kanban, scrum, org]
	},
	{
		title: 'Коммуникации',
		id: 200,
		anchor: 'communications',
		bgColor: 'two',
		abstractIcon: 'images/feature_2_abstract.svg',
		shortDesc: 'фокусируется на улучшении навыков общения и взаимодействия внутри команды.',
		icon: 'images/star_icon-2.svg',
		features: ['Развитие навыков активного слушания', 'Улучшение навыков обратной связи ', '', ''],
		games: [coffee, roles, health, hr, coreCards]
	},
	{
		title: 'Планирование',
		id: 300,
		bgColor: 'three',
		abstractIcon: 'images/feature_3_abstract.svg',
		anchor: 'planning',
		shortDesc: 'развить навыки проектного планирования, анализа рисков и оценки ресурсов',
		icon: 'images/star_icon-3.svg',
		features: [
			'Управление временем и ресурсами',
			'Управление рисками',
			'Навыки прогнозирования',
			''
		],
		games: [owner, multitasking, pizza]
	},
	{
		title: 'Выполнение',
		id: 400,
		bgColor: 'four',
		abstractIcon: 'images/feature_4_abstract.svg',
		anchor: 'implementation',
		shortDesc:
			'сосредоточены на практических аспектах выполнения задач: организация работы, реализация проектов и контроль над выполнением поручений.',
		icon: 'images/star_icon-4.svg',
		features: [
			'Развитие навыков концентрации',
			'Усиление личной ответственности',
			'Повышение личной продуктивности',
			''
		],
		games: [pomodoro, todo, delay]
	}
];

export {
	boardgamesList,
	categories,
	pm,
	coffee,
	hr,
	cynefin,
	delay,
	delegation,
	health,
	holacrat,
	kanban,
	multitasking,
	org,
	owner,
	pizza,
	pomodoro,
	roles,
	scrum,
	todo,
	wip,
	coreCards
};
