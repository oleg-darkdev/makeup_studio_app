const fr = {
	title: 'Paiement annulé',
	description:
		"Il semble que vous ayez annulé le processus de paiement ou fermé la fenêtre Stripe avant qu'il ne soit terminé. Votre paiement n'a pas été débité et la commande n'a pas été passée.",
	nextSteps: {
		title: 'Que faire ensuite',
		retry: {
			title: 'Réessayer',
			desc: 'Vous pouvez répéter le paiement à tout moment en vous rendant sur la',
			linkTitle: 'page des plans tarifaires'
		},
		checkStatus: {
			title: 'Vérifier le statut',
			desc: "Si vous êtes sûr que le paiement a été effectué mais n'avez pas reçu de confirmation, veuillez contacter notre support."
		},
		help: {
			title: "Besoin d'aide ? Contactez-nous",
			desc: 'Nous vous aiderons à résoudre le paiement et à reprendre le processus.'
		}
	},
	buttons: {
		home: 'Accueil',
		plans: 'Choisir un plan'
	}
};

export default fr;
