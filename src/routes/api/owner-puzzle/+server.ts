import { json } from '@sveltejs/kit';
import { owner } from '$sharedData';
import { getShortSingleBoardgameData } from '$sharedUtils';



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
// ,
// pizza,
// pomodoro,
// roles,
// scrum,
// todo,
// wip;

export async function GET(event) {
	return json(getShortSingleBoardgameData(owner), {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	});
}


