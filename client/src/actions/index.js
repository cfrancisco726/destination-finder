import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_TRIP } from './types';
var bodyParser = require('body-parser');

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');

	dispatch({ type: FETCH_USER, payload: res.data });
	console.log(res.data);
};

// export function fetchTrip(trip) {
// 	return function(dispatch) {
// 		axios
// 			.post('/api/trip', trip)
// 			.then(function(res) {
// 				dispatch({ type: FETCH_TRIP, payload: res.data });
// 				console.log(res.data);
// 			})
// 			.catch(function(err) {
// 				dispatch({
// 					type: 'FETCH_TRIP_REJECTED',
// 					msg: 'error when fetching trip'
// 				});
// 			});
// 	};

export const fetchTrip = trip => async dispatch => {
	const res = await axios.post('/api/trip', trip);

	dispatch({ type: FETCH_TRIP, payload: res.data });
	console.log(res.data);
};

// export function fetchTrip(trip) {
// 	const AMADEUS_URL = `https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=${'M7nf7zFHbiBO2D7vDIXYUZ6S52JNAAV1'}`;
// 	console.log('body', trip);
//
// 	const URL = `${AMADEUS_URL}&origin=${trip[0].origin}&departure_date=${
// 		trip[0].date
// 	}&duration=${trip[0].duration}`;
//
// 	console.log(URL);
//
// 	const request = axios.get(URL);
//
// 	console.log('Request', request);
//
// 	return {
// 		type: FETCH_TRIP,
// 		payload: request
// 	};
// }
