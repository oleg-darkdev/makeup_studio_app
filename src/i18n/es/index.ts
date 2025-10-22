import type { BaseTranslation } from '../i18n-types';
import {
	navigationEs,
	pricesEs,
	servicesEs,
	// postsEs,
	programEs,
	portfolioEs,
	featuresEs,
	coachEs,
	footerEs,
	ctaEs,
	heroEs,
	faqEs,
	giftEs,
	headerEs,
	programAppEs,
	checkoutAppEs,
	pricesAppEs,
	cancelPaymentAppEs
} from '../../lib/shared/data';

const es = {
	prices: pricesEs,
	services: servicesEs,
	// posts: postsEs,
	portfolio: portfolioEs,
	navigation: navigationEs,
	footer: footerEs,
	hero: heroEs,
	features: featuresEs,
	coach: coachEs,
	program: programEs,
	cta: ctaEs,
	faq: faqEs,
	gift: giftEs,
	header: headerEs,
	app: {
		program: programAppEs,
		prices: pricesAppEs,
		checkout: checkoutAppEs,
		cancelPayment: cancelPaymentAppEs
	}
} satisfies BaseTranslation;

export default es;
