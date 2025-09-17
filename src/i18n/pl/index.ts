import type { BaseTranslation } from '../i18n-types';

// Polish
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
	faqPl
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
	faq: faqPl
} satisfies BaseTranslation;

export default pl;
