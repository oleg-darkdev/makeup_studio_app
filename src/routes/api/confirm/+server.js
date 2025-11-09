import { json } from '@sveltejs/kit';
import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(STRIPE_SECRET_KEY);
const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const POST = async ({ request }) => {
	try {
		const body = await request.json();
		const { session_id } = body;

		if (!session_id) return json({ error: 'Missing session_id' }, { status: 400 });

		const session = await stripe.checkout.sessions.retrieve(session_id);

		// console.log(session.payment_status);

		if (session.payment_status === 'paid') {
			const nickname = session.metadata.nickname;

			console.log(nickname);

			const { error } = await supabase
				.from('users_progress')
				.update({ payment_status: true })
				.eq('nickname', nickname);

			if (error) return json({ error: error.message }, { status: 500 });

			return json({ ok: true });
		}

		return json({ ok: false, message: 'Payment not completed' });
	} catch (err) {
		console.error('❌ Confirm payment error:', err);
		return json({ error: err.message }, { status: 500 });
	}
};
