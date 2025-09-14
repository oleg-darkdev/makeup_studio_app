import type { BaseTranslation } from '../i18n-types';
import {
	navigationRu,
	courseDataRu,
	// pricesRu,
	servicesRu,
	// postsRu,
	portfolioRu,
	targetAudienceRu,
	footerRu
} from '../../lib/shared/data';
// import heroRu from '../../lib/shared/data/hero/ru.ts';
// import featuresRu from '../../lib/shared/data/features/ru.ts';
// import coachRu from '../../lib/shared/data/coach/ru.ts';
// import programRu from '../../lib/shared/data/program/ru.ts';
// import ctaRu from '../../lib/shared/data/cta/ru.ts';
// import faqRu from '../../lib/shared/data/faq/ru.ts';

const ru = {
	courseData: courseDataRu,
	// prices: pricesRu,
	services: servicesRu,
	// posts: postsRu,
	portfolio: portfolioRu,
	targetAudience: targetAudienceRu,
	navigation: navigationRu,
	footer: footerRu
	// hero: heroRu,
	// features: featuresRu,
	// coach: coachRu,
	// program: programRu,
	// cta: ctaRu,
	// faq: faqRu
} satisfies BaseTranslation;

export default ru;
