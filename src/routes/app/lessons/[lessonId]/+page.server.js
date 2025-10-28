// +layout.server.js или другой серверный load
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
		// Проверка JWT с использованием jose (Web Crypto API)
		const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));

		const progress = null; // можно обновить по логике приложения

		return {
			user: {
				id: payload.userId,
				anonymous: payload.anonymous,
				paymentTransaction: false,
				createdAt: new Date(payload.createdAt),
				progress
			}
		};
	} catch (err) {
		console.error('Invalid token:', err.message);
		// если токен испорчен или истёк — удаляем cookie
		cookies.delete('session', { path: '/' });
		return { user: null };
	}
}
