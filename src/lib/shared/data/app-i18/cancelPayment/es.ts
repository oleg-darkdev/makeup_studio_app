const es = {
	title: 'Pago cancelado',
	description:
		'Parece que cancelaste el proceso de pago o cerraste la ventana de Stripe antes de completarlo. Tu pago no se realizó y el pedido no fue procesado.',
	nextSteps: {
		title: 'Qué hacer a continuación',
		retry: {
			title: 'Intentar de nuevo',
			desc: 'Puedes repetir el pago en cualquier momento yendo a la',
			linkTitle: 'página de planes'
		},
		checkStatus: {
			title: 'Verificar el estado',
			desc: 'Si estás seguro de que el pago se realizó pero no recibiste confirmación, contacta con nuestro soporte.'
		},
		help: {
			title: '¿Necesitas ayuda? Contáctanos',
			desc: 'Te ayudaremos a resolver el pago y continuar el proceso.'
		}
	},
	buttons: {
		home: 'Inicio',
		plans: 'Elegir plan'
	}
};

export default es;
