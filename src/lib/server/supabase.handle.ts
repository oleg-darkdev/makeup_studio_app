import { createServerClient } from '@supabase/ssr';
import type { Handle } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';

export const supabaseHandle: Handle = async ({ event, resolve }) => {
	if (env.PUBLIC_SUPABASE_URL && env.PUBLIC_SUPABASE_ANON_KEY) {
		event.locals.supabase = createServerClient(
			env.PUBLIC_SUPABASE_URL,
			env.PUBLIC_SUPABASE_ANON_KEY,
			{
				cookies: {
					get: (key) => event.cookies.get(key),
					set: (key, value, options) => {
						event.cookies.set(key, value, { ...options, path: '/' });
					},
					remove: (key, options) => {
						event.cookies.delete(key, { ...options, path: '/' });
					}
				}
			}
		);
	}

	event.locals.safeGetSession = async () => {
		try {
			const {
				data: { session }
			} = await event.locals.supabase.auth.getSession();

			if (!session) {
				return { session: null, user: null };
			}

			const {
				data: { user },
				error
			} = await event.locals.supabase.auth.getUser();

			if (error) {
				return { session: null, user: null };
			}
			return { session, user };
		} catch (error) {
			return { session: null, user: null };
		}
	};

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range' || name === 'x-supabase-api-version';
		}
	});
};
