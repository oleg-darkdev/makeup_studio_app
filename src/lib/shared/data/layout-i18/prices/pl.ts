const pl = {
	titleStart: 'Dostępne',
	titleEnd: 'plany taryfowe',
	buttonBuy: 'Uzyskaj dostęp',
	data: [
		{
			id: 1,
			title: 'Samodzielny',
			shortDesc:
				'Idealna opcja dla tych, którzy chcą uczyć się we własnym tempie. Otrzymasz pełny dostęp do wszystkich lekcji bez żadnych ograniczeń.',
			img: '/images/prices/self.webp',
			features: ['Możliwość nauki w dogodnym dla siebie tempie'],
			price: '300',
			link: '#self',
			anchor: 'self',
			priceId: 'price_1SJbXjEdBK6uZ4fP8gNktSSk',

			buyLink: '/app'
		},
		{
			id: 2,
			title: 'Z kuratorem',
			shortDesc:
				'Nie tylko oglądasz lekcje — masz mentora. Po każdej pracy domowej kurator udzieli szczegółowej informacji zwrotnej i pomoże poprawić błędy. (liczba miejsc ograniczona)',
			img: '/images/prices/curator.webp',
			features: ['Indywidualne wsparcie', 'Bezpośredni kontakt z mistrzem'],
			price: '500',
			link: '#curator',
			anchor: 'curator',
			priceId: 'price_1SJbYCEdBK6uZ4fPbvndkMKk',

			buyLink: '/app'
		},
		{
			id: 3,
			title: 'Z Valerią',
			features: [
				'Bezpośredni kontakt — praca osobiście z mistrzem',
				'Zdobywanie wiedzy z pierwszej ręki',
				'Praca w małej grupie — maksymalne zaangażowanie i uwaga'
			],
			shortDesc:
				'Wersja premium kursu. Będziesz uczyć się w mini grupie do 10 osób bezpośrednio z autorką kursu. To coś więcej niż wsparcie — to ekskluzywny dostęp do wiedzy i doświadczenia.',
			img: '/images/prices/valeria.webp',
			price: '1500',
			link: '#with-valeria',
			anchor: 'with-valeria',
			priceId: 'price_1SJbZ5EdBK6uZ4fPo6F0QDZu',

			buyLink: '/app'
		}
	]
};

export default pl;
