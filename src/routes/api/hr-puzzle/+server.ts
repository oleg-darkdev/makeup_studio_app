import { json } from '@sveltejs/kit';
import { hr } from '$sharedData';
import { getShortSingleBoardgameData } from '$sharedUtils';

export async function GET(event) {
	return json(getShortSingleBoardgameData(hr), {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	});
}


