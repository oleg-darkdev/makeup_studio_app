import { json } from '@sveltejs/kit';
import { delegation } from '$sharedData';
import { getShortSingleBoardgameData } from '$sharedUtils';



export async function GET(event) {
	return json(getShortSingleBoardgameData(delegation), {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	});
}


