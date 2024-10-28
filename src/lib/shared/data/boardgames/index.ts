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
		title: 'Zarządzanie',
		id: 100,
		bgColor: 'one',
		abstractIcon: 'images/feature_1_abstract.svg',
		anchor: 'management',
		// развивают навыки эффективного управления и лидерства, помогая пользователям освоить стратегическое планирование, постановку целей и организацию рабочих процессов
		shortDesc:
			' Rozwijaj umiejętności zarządzania i przywództwa, pomagając użytkownikom opanować planowanie strategiczne, wyznaczanie celów i organizację pracy.',
		icon: '/images/star_icon-5.svg',
		features: [
			// Организация и оптимизация рабочих процессов
			// Методы и практики управления в условиях неопределенности
			// Выявление  "узких мест" в операционной деятельности
			// Построение стратегического и системного мышления
			// гибкости в подходах к управлению
			// Контроль делегированных задач
			// `Organizacja i optymalizacja procesów biznesowych`,
			// `Metody i praktyki zarządzania w warunkach niepewności`,
			// `Identyfikacja wąskich gardeł w działalności operacyjnej`,
			// `Budowanie myślenia strategicznego i systemowego`

			`Organizacja procesów biznesowych`,
			`Metody i praktyki zarządzania`,
			`Budowanie myślenia systemowego`,
			`Identyfikacja wąskich gardeł`,
			`Kontrola delegowanych zadań`
			// `Elastyczność w podejściach do zarządzania`
		],
		games: [cynefin, delegation, holacrat, kanban, scrum, org]
	},
	{
		title: 'Komunikacja',
		id: 200,
		anchor: 'communications',
		bgColor: 'two',
		abstractIcon: '.images/feature_2_abstract.svg',
		// фокусируется на улучшении навыков общения и взаимодействия внутри команды.
		shortDesc: 'Koncentruje się na doskonaleniu kompetencji komunikacyjnych i facylitacyjnych.',
		icon: '/images/star_icon-2.svg',
		// Конструктивная обратная связь
		// Распознавание барьеров в общении
		// Практики ведения диалога в группе
		// Вовлечение каждого члена команды в дискуссию
		// Способы уточнения и раскрытия информации
		// Выявление и обработка причин конфликта
		// Дискуссия и открытость внутри группы
		// 'Развитие навыков активного слушания',
		// 'Улучшение навыков обратной связи ',
		features: [
			'Rozpoznawanie barier w komunikacji',
			'Prowadzenie dialogu grupowego',
			`Angażowanie każdego w dyskusję`,
			// `Metody ujawniania informacji`,
			`Identyfikacja przyczyn konfliktu`
		],
		games: [coffee, roles, health, hr, coreCards]
	},
	{
		title: 'Planowanie',
		id: 300,
		bgColor: 'three',
		abstractIcon: 'images/feature_3_abstract.svg',
		anchor: 'planning',
		shortDesc:
			'Rozwijanie umiejętności planowania projektów, analizy zagrożeń, ustalania priorytetów i oceny dostępnych zasobów.',
		icon: '.images/star_icon-3.svg',
		features: [
			// 'Umiejętności przewidywania',
			`Produktywność osobista`,
			`Przemyślenia i uświadomienie sytuacji`,
			`Reagowanie i wprowadzanie korekt`,
			`Ustalanie priorytetów`
		],
		games: [owner, pomodoro]
	},
	{
		title: 'Realizacja',
		id: 400,
		bgColor: 'four',
		abstractIcon: 'images/feature_4_abstract.svg',
		anchor: 'implementation',
		shortDesc:
			'Koncentruje się na praktycznych aspektach realizacji zadań, wdrażaniu projektów i monitorowaniu ich postępów za pomocą wizualizacji.',
		icon: 'images/star_icon-4.svg',
		features: [
			'Koncentracja i skupienie',
			`Efektywna organizacja przestrzeni`,
			`Realizacja zadań priorytetowych`
		],
		games: [todo, delay, pizza, multitasking]
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
