import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_DESTINATION } from './types';

const API_KEY = 'MQoCj3AhudUmABvk3nzq7vrKkuG4w3Jj';
const ROOT_URL = `https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=${API_KEY}`;

export function fetchDestination(originInput, dateInput) {
	const url = `${ROOT_URL}&origin=${originInput}&departure_date=${dateInput}`;
	const request = axios.get(url);

	console.log('Request', request);

	return {
		type: FETCH_DESTINATION,
		payload: request
	};

	// redux promise stops action, once request finishes it dispatches a new action of same type but with payload
}

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');

	dispatch({ type: FETCH_USER, payload: res.data });
};
