import { json } from '@sveltejs/kit';
import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';

const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_ANON_KEY
);


export async function GET({ params }) {
	const { id } = params;

	if (!id) {
		return json({ error: 'Не передан ID пользователя' }, { status: 400 });
	}

	// Запрос в базу данных
	const { data, error } = await supabase
		.from('users_progress')
		.select('*')
		.eq('user_id', id)
		.single(); // гарантирует, что вернётся один пользователь

	if (error) {
		console.error('Ошибка при поиске пользователя:', error);
		return json({ error: 'Пользователь не найден' }, { status: 404 });
	}

	return json({ user: data });
}
