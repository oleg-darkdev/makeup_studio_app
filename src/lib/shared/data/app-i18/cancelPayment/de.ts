const de = {
	title: 'Zahlung abgebrochen',
	description:
		'Es scheint, dass Sie den Zahlungsprozess abgebrochen oder das Stripe-Fenster vor Abschluss geschlossen haben. Ihre Zahlung wurde nicht belastet und die Bestellung wurde nicht aufgegeben.',
	nextSteps: {
		title: 'Was Sie als Nächstes tun können',
		retry: {
			title: 'Erneut versuchen',
			desc: 'Sie können die Zahlung jederzeit wiederholen, indem Sie zur Seite',
			linkTitle: 'mit den Tarifplänen gehen'
		},
		checkStatus: {
			title: 'Status prüfen',
			desc: 'Wenn Sie sicher sind, dass die Zahlung erfolgt ist, aber keine Bestätigung erhalten haben, kontaktieren Sie bitte unseren Support.'
		},
		help: {
			title: 'Brauchen Sie Hilfe? Schreiben Sie uns',
			desc: 'Wir helfen Ihnen, die Zahlung zu klären und den Prozess fortzusetzen.'
		}
	},
	buttons: {
		home: 'Zur Startseite',
		plans: 'Zum Tarifplan'
	}
};

export default de;
