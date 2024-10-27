import { json } from '@sveltejs/kit';
import { roles } from '$sharedData';
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
// ,
// scrum,
// todo,
// wip;

export async function GET(event) {
	return json(getShortSingleBoardgameData(roles), {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	});
}


