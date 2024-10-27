import { json } from '@sveltejs/kit';
import { pizza } from '$sharedData';
import { getShortSingleBoardgameData } from '$sharedUtils';




export async function GET(event) {
	return json(getShortSingleBoardgameData(pizza), {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	});
}


