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
		if (!token) return json({ error: 'Unauthorized' }, { status: 401 });
		if (!JWT_SECRET) return json({ error: 'Server misconfiguration' }, { status: 500 });

		const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
		const { priceId, lang } = await request.json();

		if (!priceId) return json({ error: 'Missing priceId' }, { status: 400 });

		// Создаём Stripe Checkout Session
		const session = await stripe.checkout.sessions.create({
			mode: 'payment',
			line_items: [{ price: priceId, quantity: 1 }],
			// Добавляем session_id в query для success_url
			success_url: `http://localhost:5173/api/confirm?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: 'http://localhost:5173/cancel',
			metadata: {
				lang,
				nickname: payload.nickname
			}
		});

		return json({ url: session.url });
	} catch (err) {
		console.error('❌ Stripe error:', err);
		return json({ error: err.message }, { status: 500 });
	}
}

// app/dashboard/${lang}