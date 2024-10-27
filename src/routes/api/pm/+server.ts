import { json } from '@sveltejs/kit';
import { pm } from '$sharedData';

// coffee,
// hr,
// cynefin,
// delay,
// delegation,
// health,
// holacrat,
// kanban,
// multitasking,
// org,
// owner,
// pizza,
// pomodoro,
// roles,
// scrum,
// todo,
// wip;

export async function GET(event) {
	return json(pm, {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	});
}


