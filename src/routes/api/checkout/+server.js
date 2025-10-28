import Stripe from 'stripe';
import { json } from '@sveltejs/kit';
import { STRIPE_SECRET_KEY } from '$env/static/private';
import jwt from 'jsonwebtoken';
import { env } from '$env/dynamic/private';

const JWT_SECRET = env.JWT_SECRET;
const stripe = new Stripe(STRIPE_SECRET_KEY);

export async function POST({ request, cookies }) {
	try {
		const token = cookies.get('session');

		if (!token) {
			return json({ error: 'Unauthorized' }, { status: 401 });
		}

		const decoded = jwt.verify(token, JWT_SECRET);
		console.log('checkout server');
		console.log(decoded.userId);

		const { priceId, lang } = await request.json();
		console.log(lang);

		const session = await stripe.checkout.sessions.create({
			mode: 'payment',
			line_items: [{ price: priceId, quantity: 1 }],
			success_url: 'http://localhost:5173/success',
			cancel_url: 'http://localhost:5173/cancel',
			metadata: {
				lang: lang,
				user_id: decoded.userId
			}
		});

		return json({ url: session.url });
	} catch (err) {
		console.error('Stripe error:', err);
		return json({ error: err.message }, { status: 500 });
	}
}
