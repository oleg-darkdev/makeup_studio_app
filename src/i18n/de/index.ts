import type { BaseTranslation } from '../i18n-types';
import {
	navigationDe,
	pricesDe,
	servicesDe,
	// postsDe,
	programDe,
	portfolioDe,
	featuresDe,
	coachDe,
	footerDe,
	ctaDe,
	heroDe,
	faqDe,
	giftDe
} from '../../lib/shared/data';

const de = {
	prices: pricesDe,
	services: servicesDe,
	// posts: postsDe,
	portfolio: portfolioDe,
	navigation: navigationDe,
	footer: footerDe,
	hero: heroDe,
	features: featuresDe,
	coach: coachDe,
	program: programDe,
	cta: ctaDe,
	faq: faqDe,
	gift: giftDe
} satisfies BaseTranslation;

export default de;
