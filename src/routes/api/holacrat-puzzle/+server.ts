import { json } from '@sveltejs/kit';
import { holacrat } from '$sharedData';
import { getShortSingleBoardgameData } from '$sharedUtils';



export async function GET(event) {
	return json(getShortSingleBoardgameData(holacrat), {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	});
}


