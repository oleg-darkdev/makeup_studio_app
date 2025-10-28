// src/routes/+page.server.js (или другой серверный load)
import { env } from '$env/dynamic/private';
import { jwtVerify } from 'jose';

const JWT_SECRET = env.JWT_SECRET;

export async function load({ cookies }) {
	const token = cookies.get('session');

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
		// Проверка JWT с помощью jose
		const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));

		return {
			user: {
				id: payload.userId,
				anonymous: payload.anonymous,
				paymentTransaction: payload.payment_status,
				createdAt: new Date(payload.createdAt),
				progress: payload.progress_level
			}
		};
	} catch (err) {
		console.error('Invalid token:', err.message);
		cookies.delete('session', { path: '/' });
		return { user: null };
	}
}
