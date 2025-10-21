const ru = {
	titleStart: 'Доступные',
	titleEnd: 'тарифные планы',
	buttonBuy: 'Получить доступ',
	data: [
		{
			id: 1,
			title: 'Самостоятельный',
			shortDesc:
				'идеальный вариант для тех, кто хочет изучать курс в своём ритме. Ты получишь полный доступ ко всем урокам без каких-либо ограничений.',
			img: '/images/prices/self.webp',
			features: ['Возможность обучаться в удобном для тебя ритме'],
			priceId: 'price_1SJbXjEdBK6uZ4fP8gNktSSk',

			price: '300',
			link: '#self',
			anchor: 'self',
			buyLink: '/app'
		},
		{
			id: 2,
			title: 'С куратором',
			shortDesc:
				'ты не просто смотришь уроки — ты получаешь наставника. После каждой домашней работы куратор даст развернутую обратную связь и поможет исправить ошибки. (количество мест ограничено)',
			img: '/images/prices/curator.webp',
			features: ['Персонализированная поддержка', 'Непосредственный контакт с куратором'],

			price: '500',
			link: '#curator',
			anchor: 'curator',
			priceId: 'price_1SJbYCEdBK6uZ4fPbvndkMKk',

			buyLink: '/app'
		},
		{
			id: 3,
			title: 'С Валерией',
			features: [
				'Прямой контакт — работа лично с мастером',
				'Получение знаний «из первых рук»',
				'Работа в малой группе — максимальное внимание и гарантия  вовлечённости'
			],

			shortDesc:
				'премиум-версия курса. Ты будешь обучаться в мини-группе до 10 человек лично с автором курса. Это больше, чем поддержка — это эксклюзивный доступ к знаниям и опыту.',
			img: '/images/prices/valeria.webp',
			price: '1500',
			link: '#with-valeria',
			anchor: 'with-valeria',
			priceId: 'price_1SJbZ5EdBK6uZ4fPo6F0QDZu',

			buyLink: '/app'
		}
	]
};

export default ru;
