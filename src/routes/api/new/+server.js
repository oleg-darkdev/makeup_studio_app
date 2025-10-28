// src/routes/api/session/+server.js
import { v4 as uuidv4 } from 'uuid';
import { env } from '$env/dynamic/private';
import { createClient } from '@supabase/supabase-js';
import { SignJWT } from 'jose';

const JWT_SECRET = env.JWT_SECRET;
const JWT_EXPIRES_IN = env.JWT_EXPIRES_IN || '7d';

const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_ANON_KEY
);

export async function POST({ cookies }) {
	if (!JWT_SECRET) {
		console.error('❌ Missing JWT_SECRET in environment variables');
		return new Response(JSON.stringify({ error: 'Server misconfiguration' }), { status: 500 });
	}

	const userId = uuidv4();
	const payload = { userId, anonymous: true, createdAt: Date.now() };

	// Генерация JWT с помощью jose (подходит для Edge Functions)
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

	// Вставка нового пользователя в Supabase
	const { error } = await supabase
		.from('users_progress')
		.insert([{ user_id: userId, payment_status: 'unpaid', progress_level: 0 }]);

	if (error) console.error(error);

	return new Response(JSON.stringify({ ok: true, userId }), {
		headers: { 'Content-Type': 'application/json' }
	});
}
