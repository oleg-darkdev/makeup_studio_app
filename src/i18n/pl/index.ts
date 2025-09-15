import type { BaseTranslation } from '../i18n-types';

// Polish
import {
	navigationPl,
	courseDataPl,
	pricesPl,
	servicesPl,
	postsPl,
	portfolioPl,
	footerPl,
	targetAudiencePl,
	heroPl
} from '../../lib/shared/data';
// import heroPl from '../../lib/shared/data/hero/pl.ts';
// import featuresPl from '../../lib/shared/data/features/pl.ts';
// import coachPl from '../../lib/shared/data/coach/pl.ts';
// import programPl from '../../lib/shared/data/program/pl.ts';
// import ctaPl from '../../lib/shared/data/cta/pl.ts';
// import faqPl from '../../lib/shared/data/faq/pl.ts';

const pl = {
	courseData: courseDataPl,
	prices: pricesPl,
	services: servicesPl,
	posts: postsPl,
	portfolio: portfolioPl,
	targetAudience: targetAudiencePl,
	navigation: navigationPl,
	footer: footerPl,
	hero: heroPl,
	// features: featuresPl,
	// coach: coachPl,
	// program: programPl,
	// cta: ctaPl,
	// faq: faqPl
} satisfies BaseTranslation;

export default pl;
