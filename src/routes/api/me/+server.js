import jwt from 'jsonwebtoken';
import { env } from '$env/dynamic/private';

export async function GET({ cookies }) {
	const token = cookies.get('session');
	if (!token) return new Response(JSON.stringify({ user: null }), { status: 401 });

	try {
		const decoded = jwt.verify(token, env.JWT_SECRET);
		return new Response(
			JSON.stringify({
				user: {
					id: decoded.userId,
					anonymous: decoded.anonymous,
					createdAt: decoded.createdAt,
					paymentTransaction: decoded.paymentTransaction,
					progress: decoded.progress
				}
			}),
			{ headers: { 'Content-Type': 'application/json' } }
		);
	} catch {
		return new Response(JSON.stringify({ user: null }), { status: 403 });
	}
}
