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
	try {
		const { nickname } = await request.json();
		if (!nickname) {
			return new Response(JSON.stringify({ error: 'Nickname is required' }), { status: 400 });
		}

		// Ищем пользователя по nickname
		const { data: user, error } = await supabase
			.from('users_progress')
			.select('*')
			.eq('nickname', nickname)
			.single();

		if (error || !user) {
			return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
		}

		// Создаём JWT с нужными данными
		const payload = {
			nickname,
			payment_status: user.payment_status,
			progress_level: user.progress_level
		};

		const token = await new SignJWT(payload)
			.setProtectedHeader({ alg: 'HS256' })
			.setExpirationTime(JWT_EXPIRES_IN)
			.sign(new TextEncoder().encode(JWT_SECRET));

		// Устанавливаем cookie
		cookies.set('session', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'lax',
			path: '/',
			maxAge: 7 * 24 * 60 * 60
		});

		return new Response(JSON.stringify({ ok: true, nickname, user }), {
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err) {
		console.error('❌ Session update error:', err);
		return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
	}
}
