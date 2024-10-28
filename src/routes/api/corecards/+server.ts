import { json } from '@sveltejs/kit';
import { coreCards } from '$sharedData';
import { getShortSingleBoardgameData } from '$sharedUtils';


export async function GET(event) {
	return json(getShortSingleBoardgameData(coreCards), {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	});
}


