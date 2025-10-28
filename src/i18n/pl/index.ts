import type { BaseTranslation } from '../i18n-types';

// polish
import {
	navigationPl,
	pricesPl,
	servicesPl,
	postsPl,
	portfolioPl,
	footerPl,
	coachPl,
	programPl,
	ctaPl,
	featuresPl,
	heroPl,
	faqPl,
	giftPl,
	headerPl,
	programAppPl,
	pricesAppPl,
	checkoutAppPl,
	cancelPaymentPl,
	welcomeAppPl,
	authAppPl
} from '../../lib/shared/data';

const pl = {
	prices: pricesPl,
	services: servicesPl,
	posts: postsPl,
	portfolio: portfolioPl,
	navigation: navigationPl,
	footer: footerPl,
	hero: heroPl,
	features: featuresPl,
	coach: coachPl,
	program: programPl,
	cta: ctaPl,
	faq: faqPl,
	gift: giftPl,
	header: headerPl,
	app: {
		program: programAppPl,
		prices: pricesAppPl,
		checkout: checkoutAppPl,
		cancelPayment: cancelPaymentPl,
		welcome: welcomeAppPl,
		auth: authAppPl
	}
} satisfies BaseTranslation;

export default pl;
