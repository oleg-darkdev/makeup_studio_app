const pl = {
	title: 'Płatność anulowana',
	description:
		'Wygląda na to, że anulowałeś proces płatności lub zamknąłeś okno Stripe przed zakończeniem. Twoja płatność nie została pobrana, a zamówienie nie zostało złożone.',
	nextSteps: {
		title: 'Co zrobić dalej',
		retry: {
			title: 'Spróbuj ponownie',
			desc: 'Możesz powtórzyć płatność w dowolnym momencie, przechodząc do',
			linkTitle: 'strony wyboru planu'
		},
		checkStatus: {
			title: 'Sprawdź status',
			desc: 'Jeśli jesteś pewien, że płatność została dokonana, ale nie otrzymałeś potwierdzenia, skontaktuj się z naszym wsparciem.'
		},
		help: {
			title: 'Potrzebujesz pomocy? Napisz do nas',
			desc: 'Pomożemy Ci rozwiązać problem z płatnością i wznowić proces.'
		}
	},
	buttons: {
		home: 'Strona główna',
		plans: 'Do wyboru planu'
	}
};

export default pl;
