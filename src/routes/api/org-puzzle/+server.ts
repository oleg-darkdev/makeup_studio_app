import { json } from '@sveltejs/kit';
import { org } from '$sharedData';
import { getShortSingleBoardgameData } from '$sharedUtils';


export async function GET(event) {
	return json(getShortSingleBoardgameData(org), {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	});
}


