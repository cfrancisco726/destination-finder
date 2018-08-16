import axios from 'axios';
import { FETCH_USER, FETCH_TRIP } from './types';
var bodyParser = require('body-parser');

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');

	dispatch({ type: FETCH_USER, payload: res.data });
	console.log(res.data);
};

export const fetchTrip = trip => async dispatch => {
	const res = await axios.post('/api/trip', trip);

	dispatch({ type: FETCH_TRIP, payload: res });
	console.log('res', res);
};
