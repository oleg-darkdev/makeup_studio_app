import { json } from '@sveltejs/kit';
import { kanban } from '$sharedData';
import { getShortSingleBoardgameData } from '$sharedUtils';



export async function GET(event) {
	return json(getShortSingleBoardgameData(kanban), {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	});
}


