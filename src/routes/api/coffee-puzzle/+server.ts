import { json } from '@sveltejs/kit';
import { coffee } from '$sharedData';
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
// owner,
// pizza,
// pomodoro,
// roles,
// scrum,
// todo,
// wip;

export async function GET(event) {
	return json(getShortSingleBoardgameData(coffee), {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	});
}


