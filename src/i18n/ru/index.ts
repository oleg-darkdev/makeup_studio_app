import type { BaseTranslation } from '../i18n-types';
import {
	navigationRu,
	pricesRu,
	servicesRu,
	// postsRu,
	programRu,
	portfolioRu,
	featuresRu,
	coachRu,
	footerRu,
	ctaRu,
	heroRu,
	faqRu,
	giftRu,
	headerRu,
	pricesAppRu,
	checkoutAppRu,
	programAppRu,
	cancelPaymentAppRu
} from '../../lib/shared/data';

const ru = {
	prices: pricesRu,
	services: servicesRu,
	// posts: postsRu,
	portfolio: portfolioRu,
	navigation: navigationRu,
	footer: footerRu,
	hero: heroRu,
	features: featuresRu,
	coach: coachRu,
	program: programRu,
	cta: ctaRu,
	faq: faqRu,
	gift: giftRu,
	header: headerRu,
	app: {
		program: programAppRu,
		prices: pricesAppRu,
		checkout: checkoutAppRu,
		cancelPayment: cancelPaymentAppRu
	}
} satisfies BaseTranslation;

export default ru;
