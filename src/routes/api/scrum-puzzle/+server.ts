import { json } from '@sveltejs/kit';
import { scrum } from '$sharedData';
import { getShortSingleBoardgameData } from '$sharedUtils';




export async function GET(event) {
	return json(getShortSingleBoardgameData(scrum), {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	});
}


