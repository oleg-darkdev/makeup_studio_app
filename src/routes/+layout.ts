// import { createBrowserClient, isBrowser, parse } from '@supabase/ssr';
// import { env } from '$env/dynamic/public';


import type { LayoutLoad } from './$types';
import { loadLocaleAsync } from '$i18n/i18n-util.async';
import { setLocale } from '$i18n/i18n-svelte';
import { locales, baseLocale } from '$i18n/i18n-util';

export const load: LayoutLoad = async ({ params }) => {
	const langParam = params.lang;
	const locale = locales.includes(langParam as any)
		? (langParam as (typeof locales)[number])
		: baseLocale;

	await loadLocaleAsync(locale);
	setLocale(locale);

	return { locale };
};

// export const load: LayoutLoad = async ({ data, depends }) => {
	// depends('supabase:auth');
	// if (data) {
		// await loadLocaleAsync(data.locale);
		// setLocale(data.locale);

		// const LL = i18nObject(data.locale);
		// console.info(data);
		// console.info(data.locale);
		// console.log('layout.svete')

		// console.info(LL.log({ fileName: '+layout.ts' }));
	// }
	// const supabase = createBrowserClient(
	// 	env.PUBLIC_SUPABASE_URL || '',
	// 	env.PUBLIC_SUPABASE_ANON_KEY || '',
	// 	{
	// 		global: {
	// 			fetch
	// 		},
	// 		cookies: {
	// 			get(key) {
	// 				if (!isBrowser()) {
	// 					return JSON.stringify(data.session);
	// 				}
	// 				const cookie = parse(document.cookie);
	// 				return cookie[key];
	// 			}
	// 		}
	// 	}
	// );
	// const {
	// 	data: { session }
	// } = await supabase.auth.getSession();
	// return { ...data, session, supabase };
// };
