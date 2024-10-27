import { json } from '@sveltejs/kit';
import { pomodoro } from '$sharedData';
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
// ,
// roles,
// scrum,
// todo,
// wip;

export async function GET(event) {
	return json(getShortSingleBoardgameData(pomodoro), {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	});
}


