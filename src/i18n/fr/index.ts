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
	giftFr
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
	gift: giftFr
} satisfies BaseTranslation;

export default fr;
