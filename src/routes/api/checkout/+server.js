import Stripe from 'stripe';
import { json } from '@sveltejs/kit';
import { STRIPE_SECRET_KEY } from '$env/static/private';

const stripe = new Stripe(STRIPE_SECRET_KEY);

export async function POST({ request }) {
	const { priceId } = await request.json();
	// console.log(priceId);

	try {
		const session = await stripe.checkout.sessions.create({
			mode: 'payment',
			line_items: [{ price: priceId, quantity: 1 }],
			success_url: 'http://localhost:5173/api/success',
			cancel_url: 'http://localhost:5173/api/cancel'
		});

		return json({ url: session.url });
	} catch (err) {
		console.error('Stripe error:', err);
		return json({ error: err.message }, { status: 500 });
	}
}
