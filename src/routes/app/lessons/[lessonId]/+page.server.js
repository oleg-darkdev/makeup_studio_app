// +layout.server.js
import jwt from 'jsonwebtoken';
import { env } from '$env/dynamic/private';

const JWT_SECRET = env.JWT_SECRET;

export async function load({ cookies }) {
	const token = cookies.get('session');

	if (!token) {
		return {
			status: 302,
			redirect: '/app'
		};
	}

	try {
		const decoded = jwt.verify(token, JWT_SECRET);

		const progress = null;

		return {
			user: {
				id: decoded.userId,
				anonymous: decoded.anonymous,
				paymentTransaction: false,
				createdAt: new Date(decoded.createdAt),
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
