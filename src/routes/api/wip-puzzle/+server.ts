import { json } from '@sveltejs/kit';
import { wip } from '$sharedData';
import { getShortSingleBoardgameData } from '$sharedUtils';


export async function GET(event) {
	return json(getShortSingleBoardgameData(wip), {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	});
}


