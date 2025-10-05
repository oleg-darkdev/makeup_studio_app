const es = {
	titleStart: 'Planes',
	titleEnd: 'disponibles',
	buttonBuy: 'Obtener acceso',
	data: [
		{
			id: 1,
			title: 'Autoaprendizaje',
			shortDesc:
				'La opción ideal para quienes desean aprender a su propio ritmo. Obtendrás acceso completo a todas las lecciones sin restricciones.',
			img: '/images/prices/self.webp',
			features: ['Aprende a tu propio ritmo'],
			price: '400 €',
			link: '#self',
			anchor: 'self',

			buyLink: '/'
		},
		{
			id: 2,
			title: 'Con tutor',
			shortDesc:
				'No solo ves las lecciones, sino que también tienes un mentor. Después de cada tarea, el tutor te dará comentarios detallados y te ayudará a corregir errores. (plazas limitadas)',
			img: '/images/prices/curator.webp',
			features: ['Apoyo personalizado', 'Contacto directo con el maestro'],
			price: '600 €',
			link: '#curator',
			anchor: 'curator',

			buyLink: '/'
		},
		{
			id: 3,
			title: 'Con Valeria',
			features: [
				'Contacto directo — trabaja personalmente con la maestra',
				'Aprende de primera mano',
				'Trabajo en grupo reducido — máxima atención y compromiso'
			],
			shortDesc:
				'Versión premium del curso. Estudiarás en un grupo de hasta 10 personas directamente con la autora del curso. Más que apoyo: acceso exclusivo al conocimiento y la experiencia.',
			img: '/images/prices/valeria.webp',
			price: '1500 €',
			anchor: 'with-valeria',

			link: '#with-valeria',
			buyLink: '/'
		}
	]
};

export default es;
