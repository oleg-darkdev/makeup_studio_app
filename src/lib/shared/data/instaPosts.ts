const posts = [
	{
		avif: '/images/insta/10.avif', media: '/images/insta/10.jpg',
		postLink: 'https://www.instagram.com/p/DIRRV-0N6ge/',
		desc: [
			'На фото: свежие брови сразу после процедуры и зажившие теневые стрелки.',
			'Этот случай — отличный пример грамотного сочетания техник: — Брови выполнены в технике, обеспечивающей чёткую форму и мягкую растушёвку. Уже сейчас виден насыщенный, но сбалансированный результат, который после заживления станет ещё деликатнее и естественнее. — Стрелки — уже зажившие. Это теневая техника, при которой отсутствует резкий контур, зато есть мягкое затемнение межресничного пространства и лёгкий вуальный эффект. Взгляд становится выразительным, но остаётся естественным.',
			'Для мастеров: Обратите внимание, как важно соблюдать баланс насыщенности, правильно подбирать пигмент, учитывать тип кожи и анатомию. Именно такие нюансы отличают продвинутого специалиста от начинающего.',
			'На обучении я подробно разбираю все эти моменты: — постановку руки — выбор и смешивание пигментов — особенности заживления разных техник — адаптацию под каждого клиента',
			'Если вы хотите не просто «набивать руку», а действительно понимать, почему и как работают те или иные подходы — приходите учиться. Мои ученики работают в премиум-сегменте и добиваются стабильных результатов.',
			'Запись на обучение — в директ. Ваш следующий уровень — на расстоянии одного шага.'
		],
		commentsCount: 0,
		likesCount: 0,
		type: 0,
		id: 10
	},
	// {
	// 	avif: '/images/insta/.avif', media: '/images/insta/16.jpg',
	// 	postLink: 'https://www.instagram.com/p/DIik5btNN5J/?img_index=1',
	// 	desc: [
	// 		'Когда я только узнала,что я еду на конгресс в Румынию - я хладнокровно посмотрела на свой календарь-расписание и внесла коррективы!'
	// 	],
	// 	commentsCount: 0,
	// 	likesCount: 0,
	// 	type: 0,
	// 	id: 16
	// },
	{
		avif: '/images/insta/17.avif', media: '/images/insta/17.png',
		postLink: 'https://www.instagram.com/p/DMGVDYaNVR5/',
		desc: [
			'Не люблю перманент который видно!!!',
			'Люблю такие эффекты, когда девушка выглядит ухоженной и никто не догадывается о том что ей в этом помогла я 🥹 И это лучший комплимент для моих клиентов ❤️'
		],
		commentsCount: 0,
		likesCount: 0,
		type: 0,
		id: 17
	},
	{
		avif: '/images/insta/3.avif', media: '/images/insta/3.jpg',
		postLink: 'https://www.instagram.com/p/C8CYdxmAIMD/',
		desc: [
			'Microbeau machines have long dominated the market and are among the most popular choices. 💫',
			'Their reliability and wide variety of models have won the hearts of numerous permanent makeup artists worldwide. artists 🖊 🎨',
			'They are highly favored by academy trainers, industry speakers, and champions in the field.',
			'“I personally have been closely associated with Microbeau for more than six years ♥️ My favorite machine flawlessly fulfills all my wishes”- Valeria Vasilieva'
		],
		commentsCount: 0,
		likesCount: 0,
		type: 0,
		id: 3
	},
	// {
	// 	avif: '/images/insta/.avif', media: '/images/insta/6.jpg',
	// 	postLink: 'https://www.instagram.com/p/DDfiaUTt1qS/?img_index=1',
	// 	desc: [
	// 		'Clase magistral de “Sombreado de Ojos “del campeóna mundial y mejor entrenadora en el campo del maquillaje permanente.',
	// 		'¡Una oportunidad única de aprender de un profesional de primer nivel en 2 días!'
	// 	],
	// 	commentsCount: 0,
	// 	likesCount: 0,
	// 	type: 0,
	// 	id: 6
	// },
	{
		avif: '/images/insta/9.avif', media: '/images/insta/9.jpg',
		postLink: 'https://www.instagram.com/p/DIN5a00sz4h/',
		desc: [
			'JURY EYELIDS 🏆Półfinał Mistrzostw Świata ETALON MIX 🏆 Kategorie EYELIDS Junior i Master będzie oceniało 5 wybitnych specjalistów w tej dziedzinie.',
			'⚡️Zapisy i regulamin emevent-warsaw.com do 23.04',
			'⚡️Bilety bezpośrednio emevent.shop',
			'⚡️@etalonmix_event.warsaw',
			'format mistrzostw ONLINE⚡️4 kategorie⚡️Jasne zasady⚡️ Poziom Master⚡️Poziom Junior⚡️SZKOLENIE PRZED PÓŁFINAŁEM zapewnia organizator na specjalnej prywatnej grupie uczestników.'
		],
		commentsCount: 0,
		likesCount: 0,
		type: 0,
		id: 9
	},
	{
		avif: '/images/insta/8.avif', media: '/images/insta/8.jpg',
		postLink: 'https://www.instagram.com/p/DGQKxjms-Ag/',
		desc: ['Валерия Васильева @vasilyeva_pmu судья чемпионата GLOBAL'],
		commentsCount: 0,
		likesCount: 0,
		type: 0,
		id: 8
	},
	// {
	// 	avif: '/images/insta/.avif', media: '/images/insta/1.jpg',
	// 	postLink: 'https://www.instagram.com/p/C63mQ26Nvw9/?img_index=1',
	// 	desc: [
	// 		'С днём матери всех тех, кто выбрал для себя эту прекрасную роль в жизни ♥️',
	// 		'В каждой стране свои даты для этого праздника, но безусловно для мамы это важный день'
	// 	],
	// 	commentsCount: 0,
	// 	likesCount: 0,
	// 	type: 0,
	// 	id: 1
	// },

	// {
	// 	avif: '/images/insta/.avif', media: '/images/insta/18.jpg',
	// 	postLink: 'https://www.instagram.com/p/C46aqYzNpfW/?img_index=1',
	// 	desc: [
	// 		'Это был один из крутейших, по организации и масштабам, конгресс!!!',
	// 		'Бразилия потрясающая! Четко ощущается достаток витамина Д. Счастливые, улыбающиеся люди! Яркие краски! Потрясающая природа! В этой поездке было прекрасно всё🔥🔥🔥'
	// 	],
	// 	commentsCount: 0,
	// 	likesCount: 0,
	// 	type: 0,
	// 	id: 18
	// },

	// {
	// 	avif: '/images/insta/.avif', media: '/images/insta/2.jpg',
	// 	postLink: 'https://www.instagram.com/p/C8Tm-SXN2xA/?img_index=1',
	// 	desc: [
	// 		'Я мечтала перевернуть мир перманентного макияжа! Хотела что бы за мной последовали, перестали работать черным и наконец учли возрастные изменения! И у меня получилось! А дальше только масштабировать это и учить работать правильно и на долгосрочный результат. И именно этим я сейчас занимаюсь.',
	// 		'Постоянно обучаю тех, кто хочет быть на волне, идти в ногу со временем. И результаты моих учеников впечатляют 🫶🏻 Мы вместе готовимся к чемпионатам, учимся работать с ноля. Запросы поступают разные. Но четкая система обучения шаг за шагом - оправдывает себя каждый раз ♥️'
	// 	],
	// 	commentsCount: 0,
	// 	likesCount: 0,
	// 	type: 0,
	// 	id: 2
	// },
	{
		avif: '/images/insta/14.avif', media: '/images/insta/14.jpg',
		postLink: 'https://www.instagram.com/p/DMTI9yEtgmz/',
		desc: [
			'До сих пор боишься, когда клиент приходит на коррекцию? 🔮 Не умеешь предугадать, как заживёт работа? 🧩 Трудно анализировать и видеть причинно-следственные связи? 🪫 Много знаний — но нет системы?',
			'Очень часто мастера обладают огромным багажом умений и теории, но не умеют этим воспользоваться на практике. В голове — каша, в работе — сомнения.',
			'Я учу своих курсантов — и офлайн, и онлайн — выстраивать чёткую логику действий, уверенно принимать решения и не бояться сложных случаев. Иногда нужен всего один правильный толчок, чтобы всё встало на свои места ♥️'
		],
		commentsCount: 0,
		likesCount: 0,
		type: 0,
		id: 14
	},

	{
		avif: '/images/insta/5.avif', media: '/images/insta/5.jpg',
		postLink: 'https://www.instagram.com/p/DCEVVPqC225/?img_index=1',
		desc: [
			'И опять я со своей важностью отсроченных результатов... Знаю-знаю, вы любите молодую кожу, стрелку до ушей и пиксельную растушевку в горошек сразу после процедуры.',
			'А я вот люблю смотреть на результат через время. И люблю вам его н̶а̶в̶я̶з̶ы̶в̶а̶т̶ь̶ показывать.',
			'На фото и видео растушевка на опадающем веке спустя два года после процедуры. Мягко светлеет цвет и уходит межресничная линия. В остальном, никаких нежелательных изменений. Никаких серых оттенков и миграции чего-либо куда-либо... Как вам?'
		],
		commentsCount: 0,
		likesCount: 0,
		type: 0,
		id: 5
	},
	// {
	// 	// /images/insta/4.jpg
	// 	avif: '/images/insta/.avif', media: '/images/insta/.jpg',
	// 	postLink: 'https://www.instagram.com/p/DAgbiI1NuB9/?img_index=1',
	// 	desc: [
	// 		'Огромная часть нашей работы это перекрытия и исправления устаревшего перманентного макияжа.',
	// 		'Есть случаи когда клиент не согласен или не может по состоянию здоровья удалять старый макияж. Не все случаи подлежат исправлению и обновлению. Но если это возможно, то я считаю это долгом чести ♥️'
	// 	],
	// 	commentsCount: 0,
	// 	likesCount: 0,
	// 	type: 0,
	// 	id: 4
	// },
	{
		avif: '/images/insta/15.avif', media: '/images/insta/15.jpg',
		postLink: 'https://www.instagram.com/p/DMNpgWGN5zv/',
		desc: [
			'Делиться своими знаниями, своим мнением и получать взамен огромную энергию из зала - это нереально!!! Это что-то космическое 🥰',
			'Но так было не всегда! Я начала выступать на сцене еще в раннем детстве. Пела, танцевала, играла на фортепиано… Тогда мне было страшно, тряслись руки и голос. И каждое выступление было как будто в первый раз.',
			'Но опыт выхода на сцену дает свои плоды. Я обучалась работе на публику, ставила голос и училась контролировать свои эмоции.',
			'И сейчас выступления для меня это огромное удовольствие и обмен энергией ♥️'
		],
		commentsCount: 0,
		likesCount: 0,
		type: 0,
		id: 15
	}
	// {
	// 	avif: '/images/insta/.avif', media: '/images/insta/9.jpg',
	// 	postLink: 'https://www.instagram.com/p/DIN5a00sz4h/',
	// 	desc: [
	// 		'JURY EYELIDS 🏆Półfinał Mistrzostw Świata ETALON MIX 🏆 Kategorie EYELIDS Junior i Master będzie oceniało 5 wybitnych specjalistów w tej dziedzinie.',
	// 		'⚡️Zapisy i regulamin emevent-warsaw.com do 23.04',
	// 		'⚡️Bilety bezpośrednio emevent.shop',
	// 		'⚡️@etalonmix_event.warsaw',
	// 		'format mistrzostw ONLINE⚡️4 kategorie⚡️Jasne zasady⚡️ Poziom Master⚡️Poziom Junior⚡️SZKOLENIE PRZED PÓŁFINAŁEM zapewnia organizator na specjalnej prywatnej grupie uczestników.'
	// 	],
	// 	commentsCount: 0,
	// 	likesCount: 0,
	// 	type: 0,
	// 	id: 9
	// },

	// {
	// 	avif: '/images/insta/.avif', media: '/images/insta/7.jpg',
	// 	postLink: 'https://www.instagram.com/p/DELODTiu__-/?img_index=1',
	// 	desc: [
	// 		'Крайне редко в повседневной жизни нам удается поработать с действительно идеальной кожей.',
	// 		'Но если уж выдалась возможность, то сам Бог велел сделать все максимально правильно!',
	// 		'А еще меня до глубины души поразила история этой прекрасной девушки! Такой чистой и доброй душей! Таких людей осталось на всей планете крайне мало. И для меня было важно сделать для нее работу, достойную ее внутреннего мира.'
	// 	],
	// 	commentsCount: 0,
	// 	likesCount: 0,
	// 	type: 0,
	// 	id: 7
	// },

	// {
	// 	avif: '/images/insta/.avif', media: '/images/insta/11.jpg',
	// 	postLink: 'https://www.instagram.com/p/DJU52tTuVLz/',
	// 	desc: [
	// 		'Почему важна эскиз перед работой?',
	// 		'Каждый миллиметр имеет значение.',
	// 		'На фото — примерная «разметка» стрелки с теневой растушевкой. Видите эти линии и точки? Это не просто «для красоты» — это ключ к симметрии, гармонии и безопасной работе. 1 — направление стрелки 2 — угол подъёма 3 — зона светлой растушёвки Каждая зона продумана с учётом анатомии глаза, плотности кожи и движения века.',
	// 		'Работа без «разметки» — как ехать по серпантину с закрытыми глазами.',
	// 		'Хочешь научиться работать точно и уверенно — приходи на обучение. Я научу тебя видеть, чувствовать и рисовать линию, которая сделает взгляд открытым и выразительным.'
	// 	],
	// 	commentsCount: 0,
	// 	likesCount: 0,
	// 	type: 0,
	// 	id: 11
	// }

	// {
	// 	avif: '/images/insta/.avif', media: '/images/insta/12.PNG',
	// 	postLink: 'https://www.instagram.com/p/DKaNDvCtiGy/',
	// 	desc: [
	// 		'Всеми любимые коллажи - такие залипательные 🤩',
	// 		'На макро фото снят результат работы сразу после процедуры перманентного макияжа. Правильно нанесенная растушевка почти всегда заживает со 💯 процентным остатком. За редкими исключениями, не мне вам рассказывать о особенностях кожи и уникальности каждого организма! Но если вы работаете правильно, чувствуете баланс между яркостью и мерой - вы будете довольны результатом!',
	// 		'Именно этому я учу своих учеников - правильности пигментации и чувству баланса в процессе!',
	// 		'Хочешь узнать больше? Пиши слово «курс» в комментариях и получи бесплатно доступ к моему авторскому онлайн мини курсу ♥️'
	// 	],
	// 	commentsCount: 0,
	// 	likesCount: 0,
	// 	type: 0,
	// 	id: 12
	// },
	// {
	// 	avif: '/images/insta/.avif', media: '/images/insta/13.jpg',
	// 	postLink: 'https://www.instagram.com/p/DKxl7ZWNbyx/',
	// 	desc: [
	// 		'Губы спустя год после пигментации ✨ Да-да, целый год, а результат — как будто только что после процедуры.',
	// 		'💋 Идеально ровный, натуральный цвет',
	// 		'💋 Форма подчёркнута, но не выглядит «накрашенной»',
	// 		'💋 Без искажений, пятен и выцветания',
	// 		'Вот что значит качество работы и правильно подобранный пигмент. Пигментация должна красиво стареть, а не превращаться в неожиданный сюрприз через несколько месяцев.',
	// 		'Такие результаты — не магия, а опыт, знания и правильная техника.',
	// 		'🔸 Если ты мастер и хочешь научиться работать с губами так, чтобы результат восхищал даже через год — приходи на обучение. Делюсь всем, что работает. Только практика, только реальные кейсы.'
	// 	],
	// 	commentsCount: 0,
	// 	likesCount: 0,
	// 	type: 0,
	// 	id: 13
	// },
];

export default posts;
