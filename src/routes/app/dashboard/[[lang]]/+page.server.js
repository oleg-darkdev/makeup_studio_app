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

		// console.log(decoded);

		return {
			user: {
				id: decoded.userId,
				anonymous: decoded.anonymous,
				paymentTransaction: decoded.payment_status,
				createdAt: new Date(decoded.createdAt),
				progress: decoded.progress_level
			}
		};
	} catch (err) {
		console.error('Invalid token:', err.message);
		cookies.delete('session', { path: '/' });
		return { user: null };
	}
}
