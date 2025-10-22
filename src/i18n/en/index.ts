import type { BaseTranslation } from '../i18n-types';
import {
	navigationEn,
	pricesEn,
	servicesEn,
	// postsEn,
	footerEn,
	portfolioEn,
	featuresEn,
	coachEn,
	programEn,
	ctaEn,
	heroEn,
	faqEn,
	giftEn,
	headerEn,
	programAppEn,
	pricesAppEn,
	checkoutAppEn,
	cancelPaymentAppEn
} from '../../lib/shared/data';

const en = {
	prices: pricesEn,
	services: servicesEn,
	// posts: postsEn,
	portfolio: portfolioEn,
	navigation: navigationEn,
	footer: footerEn,
	hero: heroEn,
	features: featuresEn,
	coach: coachEn,
	program: programEn,
	cta: ctaEn,
	faq: faqEn,
	gift: giftEn,
	header: headerEn,
	app: {
		program: programAppEn,
		prices: pricesAppEn,
		checkout: checkoutAppEn,
		cancelPayment: cancelPaymentAppEn
	}
} satisfies BaseTranslation;

export default en;
