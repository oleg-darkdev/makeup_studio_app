import { json } from '@sveltejs/kit';
import { boardgamesList } from '$sharedData';
import { getShortBoardgamesData } from '$sharedUtils';


const transformedBoardgamesList = getShortBoardgamesData(boardgamesList);


export async function GET(event) {
	return json(transformedBoardgamesList, {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	});
}

