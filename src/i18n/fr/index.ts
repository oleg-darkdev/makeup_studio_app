import type { BaseTranslation } from '../i18n-types';
import {
	navigationFr,
	pricesFr,
	servicesFr,
	// postsFr,
	programFr,
	portfolioFr,
	featuresFr,
	coachFr,
	footerFr,
	ctaFr,
	heroFr,
	faqFr,
	giftFr,
	headerFr,
	programAppFr,
	pricesAppFr,
	checkoutAppFr,
	cancelPaymentFr,
	welcomeAppFr,
	authAppFr
} from '../../lib/shared/data';

const fr = {
	prices: pricesFr,
	services: servicesFr,
	// posts: postsFr,
	portfolio: portfolioFr,
	navigation: navigationFr,
	footer: footerFr,
	hero: heroFr,
	features: featuresFr,
	coach: coachFr,
	program: programFr,
	cta: ctaFr,
	faq: faqFr,
	gift: giftFr,
	header: headerFr,
	app: {
		program: programAppFr,
		prices: pricesAppFr,
		checkout: checkoutAppFr,
		cancelPayment: cancelPaymentFr,
		welcome: welcomeAppFr,
		auth: authAppFr
	}
} satisfies BaseTranslation;

export default fr;
