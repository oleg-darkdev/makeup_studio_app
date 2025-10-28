// src/routes/api/checkout/+server.js
import Stripe from 'stripe';
import { json } from '@sveltejs/kit';
import { STRIPE_SECRET_KEY } from '$env/static/private';
import { env } from '$env/dynamic/private';
import { jwtVerify } from 'jose';

const JWT_SECRET = env.JWT_SECRET;
const stripe = new Stripe(STRIPE_SECRET_KEY);

export async function POST({ request, cookies }) {
	try {
		const token = cookies.get('session');

		if (!token) {
			return json({ error: 'Unauthorized' }, { status: 401 });
		}

		if (!JWT_SECRET) {
			console.error('❌ Missing JWT_SECRET in environment variables');
			return json({ error: 'Server misconfiguration' }, { status: 500 });
		}

		// Проверка JWT с помощью jose
		const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));

		const { priceId, lang } = await request.json();

		const session = await stripe.checkout.sessions.create({
			mode: 'payment',
			line_items: [{ price: priceId, quantity: 1 }],
			success_url: 'http://localhost:5173/success',
			cancel_url: 'http://localhost:5173/cancel',
			metadata: {
				lang: lang,
				user_id: payload.userId
			}
		});

		return json({ url: session.url });
	} catch (err) {
		console.error('Stripe error:', err);
		return json({ error: err.message }, { status: 500 });
	}
}
