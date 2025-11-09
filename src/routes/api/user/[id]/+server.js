import { json } from '@sveltejs/kit';
import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';

const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_ANON_KEY
);

export async function GET({ params }) {
	const { nickname } = params;

	if (!nickname) {
		return json({ error: 'Не передан nickname пользователя' }, { status: 400 });
	}

	// Поиск пользователя по nickname
	const { data, error } = await supabase
		.from('users_progress')
		.select('*')
		.eq('nickname', nickname)
		.single(); // гарантирует, что вернётся один пользователь

	if (error || !data) {
		console.error('Ошибка при поиске пользователя:', error);
		return json({ error: 'Пользователь не найден' }, { status: 404 });
	}

	return json({ user: data });
}
