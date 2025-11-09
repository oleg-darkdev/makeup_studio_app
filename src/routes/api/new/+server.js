// src/routes/api/session/+server.js
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
		const { nickname } = await request.json();

		if (!nickname) {
			return new Response(JSON.stringify({ error: 'Nickname is required' }), { status: 400 });
		}

		// Проверяем, есть ли уже пользователь в базе
		const { data: existingUser, error: fetchError } = await supabase
			.from('users_progress')
			.select('nickname, payment_status, progress_level, created_at')
			.eq('nickname', nickname)
			.single();

		if (fetchError && fetchError.code !== 'PGRST116') {
			console.error('❌ Supabase fetch error:', fetchError.message);
			return new Response(JSON.stringify({ error: 'Database fetch failed' }), { status: 500 });
		}

		let userData = existingUser;

		// Если пользователь не найден — создаём нового
		if (!existingUser) {
			const { data: newUser, error: insertError } = await supabase
				.from('users_progress')
				.insert([{ nickname, payment_status: false, progress_level: 0 }])
				.select()
				.single();

			if (insertError) {
				console.error('❌ Supabase insert error:', insertError.message);
				return new Response(JSON.stringify({ error: 'Database insert failed' }), { status: 500 });
			}

			userData = newUser;
		}

		// ✅ Формируем payload для JWT
		const payload = {
			nickname: userData.nickname,
			anonymous: false,
			payment_status: userData.payment_status ?? false,
			progress_level: userData.progress_level ?? 0,
			createdAt: userData.created_at ?? Date.now()
		};

		// Генерация JWT
		const token = await new SignJWT(payload)
			.setProtectedHeader({ alg: 'HS256' })
			.setExpirationTime(JWT_EXPIRES_IN)
			.sign(new TextEncoder().encode(JWT_SECRET));

		// Ставим cookie
		cookies.set('session', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'lax',
			path: '/',
			maxAge: 7 * 24 * 60 * 60 // 7 дней
		});

		return new Response(
			JSON.stringify({
				ok: true,
				user: {
					nickname: userData.nickname,
					payment_status: userData.payment_status,
					progress_level: userData.progress_level
				}
			}),
			{ headers: { 'Content-Type': 'application/json' } }
		);
	} catch (err) {
		console.error('❌ Server error:', err);
		return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
	}
}
