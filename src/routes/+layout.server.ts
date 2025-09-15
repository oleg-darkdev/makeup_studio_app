// import type { LayoutServerLoad } from './$types';

// export const ssr = true;

// export const load: LayoutServerLoad = async ({ locals: { locale, safeGetSession } }) => {
// 	const { session, user } = await safeGetSession();

// 	return {
// 		locale,
// 		session,
// 		user
// 	};
// };

import { redirect } from '@sveltejs/kit';

export const load = async ({ params }) => {
	let locale = params.lang;

	// event.cookies.set(langParam, newLocale, { path: '/' });
	// event.url.searchParams.delete(langParam);

	if (!locale) {
		locale = 'en';
		throw redirect(302, '/en');
	}

	return { locale };
};
