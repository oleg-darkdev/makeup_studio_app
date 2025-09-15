import type { BaseTranslation } from '../i18n-types';
import {
	navigationEn,
	courseDataEn,
	// pricesEn,
	servicesEn,
	// postsEn,
	footerEn,
	portfolioEn,
	targetAudienceEn,
	heroEn
} from '../../lib/shared/data';
// import heroEn from '../../lib/shared/data/hero/en.ts';
// import featuresEn from '../../lib/shared/data/features/en.ts';
// import coachEn from '../../lib/shared/data/coach/en.ts';
// import programEn from '../../lib/shared/data/program/en.ts';
// import ctaEn from '../../lib/shared/data/cta/en.ts';
// import faqEn from '../../lib/shared/data/faq/en.ts';

const en = {
	courseData: courseDataEn,
	// prices: pricesEn,
	services: servicesEn,
	// posts: postsEn,
	portfolio: portfolioEn,
	targetAudience: targetAudienceEn,
	navigation: navigationEn,
	footer: footerEn,
	hero: heroEn,
	// features: featuresEn,
	// coach: coachEn,
	// program: programEn,
	// cta: ctaEn,
	// faq: faqEn
} satisfies BaseTranslation;

export default en;
