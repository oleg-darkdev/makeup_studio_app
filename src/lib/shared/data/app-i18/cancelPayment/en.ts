const en = {
	title: 'Payment Cancelled',
	description:
		'It seems you cancelled the payment process or closed the Stripe window before completion. Your payment was not charged, and the order was not placed.',
	nextSteps: {
		title: 'What to do next',
		retry: {
			title: 'Try again',
			desc: 'You can repeat the payment at any time by going to the',
			linkTitle: 'pricing plan page'
		},
		checkStatus: {
			title: 'Check the status',
			desc: 'If you are sure the payment went through but did not receive confirmation, please contact our support.'
		},
		help: {
			title: 'Need help? Contact us',
			desc: 'We will help you resolve the payment and resume the process.'
		}
	},
	buttons: {
		home: 'Home',
		plans: 'Choose a plan'
	}
};

export default en;
