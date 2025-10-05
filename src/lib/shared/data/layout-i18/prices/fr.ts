const fr = {
	titleStart: 'Formules',
	titleEnd: 'disponibles',
	buttonBuy: 'Obtenir l’accès',
	data: [
		{
			id: 1,
			title: 'En autonomie',
			shortDesc:
				'Idéal pour ceux qui souhaitent apprendre à leur propre rythme. Vous aurez un accès complet à toutes les leçons sans aucune restriction.',
			img: '/images/prices/self.webp',
			features: ['Apprenez à votre propre rythme'],
			price: '400 €',
			link: '/'
		},
		{
			id: 2,
			title: 'Avec un tuteur',
			shortDesc:
				'Vous ne faites pas que regarder les cours — vous avez un mentor. Après chaque devoir, le tuteur vous donnera un retour détaillé et vous aidera à corriger vos erreurs. (nombre de places limité)',
			img: '/images/prices/curator.webp',
			features: ['Soutien personnalisé', 'Contact direct avec le maître'],
			price: '600 €',
			link: '/'
		},
		{
			id: 3,
			title: 'Avec Valeria',
			features: [
				'Contact direct — travail personnel avec le maître',
				'Connaissances de première main',
				'Travail en petit groupe — attention maximale et implication'
			],
			shortDesc:
				'Version premium du cours. Vous étudierez dans un mini-groupe de 10 personnes maximum avec l’auteure du cours. Plus qu’un soutien — un accès exclusif à son expérience et savoir-faire.',
			img: '/images/prices/valeria.webp',
			price: '1500 €',
			link: '/'
		}
	]
};

export default fr;
