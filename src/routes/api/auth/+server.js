// src/routes/api/session-update/+server.js
import { env } from '$env/dynamic/private';
import { createClient } from '@supabase/supabase-js';
import { SignJWT } from 'jose';

const JWT_SECRET = env.JWT_SECRET;
const JWT_EXPIRES_IN = env.JWT_EXPIRES_IN || '7d';

const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_ANON_KEY
);

export async function POST({ request, cookies }) {
	if (!JWT_SECRET) {
		console.error('❌ Missing JWT_SECRET in environment variables');
		return new Response(JSON.stringify({ error: 'Server misconfiguration' }), { status: 500 });
	}

	try {
		const { userId } = await request.json();

		if (!userId) {
			return new Response(JSON.stringify({ error: 'userId is required' }), { status: 400 });
		}

		// Получаем данные пользователя из Supabase
		const { data: user, error } = await supabase
			.from('users_progress')
			.select('*')
			.eq('user_id', userId)
			.single();

		if (error || !user) {
			console.warn('Пользователь не найден:', error);
			return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
		}

		// Создаем payload для JWT
		const payload = {
			userId,
			payment_status: user.payment_status,
			progress_level: user.progress_level,
			createdAt: user.registration_date
		};

		// Генерация JWT с помощью jose
		const token = await new SignJWT(payload)
			.setProtectedHeader({ alg: 'HS256' })
			.setExpirationTime(JWT_EXPIRES_IN)
			.sign(new TextEncoder().encode(JWT_SECRET));

		// Установка cookie
		cookies.set('session', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'lax',
			path: '/',
			maxAge: 7 * 24 * 60 * 60
		});

		return new Response(JSON.stringify({ ok: true, userId, user }), {
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err) {
		console.error('Ошибка обновления куки:', err);
		return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
	}
}
