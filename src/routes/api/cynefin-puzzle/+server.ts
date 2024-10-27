import { json } from '@sveltejs/kit';
import { cynefin } from '$sharedData';
import { getShortSingleBoardgameData } from '$sharedUtils';


export async function GET(event) {
	return json(getShortSingleBoardgameData(cynefin), {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	});
}


