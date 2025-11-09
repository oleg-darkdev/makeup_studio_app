// src/routes/app/dashboard/[lang]/+page.server.js
import { env } from '$env/dynamic/private';
import { jwtVerify } from 'jose';
import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private';
import { createClient } from '@supabase/supabase-js';

const JWT_SECRET = env.JWT_SECRET;
const stripe = new Stripe(STRIPE_SECRET_KEY);
const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_ANON_KEY
);

export async function load({ cookies, url }) {
	const token = cookies.get('session');
	const session_id = url.searchParams.get('session_id');
	let errorCode = null;

	// Проверяем авторизацию
	if (!token) {
		return {
			status: 302,
			redirect: '/app'
		};
	}

	if (!JWT_SECRET) {
		console.error('❌ Missing JWT_SECRET in environment variables');
		return { user: null };
	}

	try {
		// Проверяем JWT и достаём nickname
		const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
		const nickname = payload.nickname;

		if (!nickname) {
			console.error('❌ Missing nickname in JWT payload');
			errorCode = 4011;
			return { user: null };
		}

		let paymentConfirmed = false;

		// Если был успешный платеж — проверяем его через Stripe
		if (session_id) {
			try {
				const session = await stripe.checkout.sessions.retrieve(session_id);

				if (session.payment_status === 'paid') {
					const stripeNickname = session.metadata.nickname;

					if (stripeNickname === nickname) {
						const { error } = await supabase
							.from('users_progress')
							.update({ payment_status: true })
							.eq('nickname', nickname);

						if (error) {
							console.error('Ошибка обновления статуса оплаты:', error.message);
						} else {
							paymentConfirmed = true;
							console.log(`✅ Оплата подтверждена для ${nickname}`);
						}
					}
				}
			} catch (stripeErr) {
				console.error('❌ Ошибка проверки Stripe session:', stripeErr.message);
				// errorCode = 4042;
			}
		}

		// 🧠 Здесь мы НЕ доверяем данным из JWT — тянем пользователя из базы
		const { data: userFromDb, error: fetchError } = await supabase
			.from('users_progress')
			.select('nickname, payment_status, progress_level, created_at')
			.eq('nickname', nickname)
			.single();

		if (fetchError) {
			console.error('❌ Ошибка получения пользователя из базы:', fetchError.message);
			return { user: null };
			errorCode = 4042;
		}

		// Возвращаем самые свежие данные
		return {
			user: {
				nickname: userFromDb.nickname,
				anonymous: payload.anonymous,
				paymentStatus: userFromDb.payment_status,
				createdAt: new Date(userFromDb.created_at ?? payload.createdAt),
				progress: userFromDb.progress_level
			},
			paymentConfirmed,
			errorCode
		};
	} catch (err) {
		console.error('❌ Invalid token:', err.message);
		cookies.delete('session', { path: '/' });
		return { user: null };
	}
}
