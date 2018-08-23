import axios from 'axios';
import {
	FETCH_USER,
	FETCH_TRIP,
	GET_TRIP_LIST,
	ADD_TO_TRIP_LIST,
	DELETE_TRIP_ITEM
} from './types';
var bodyParser = require('body-parser');

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchTrip = trip => async dispatch => {
	const res = await axios.post('/api/trip', trip);

	dispatch({ type: FETCH_TRIP, payload: res });
};

export function getTripList(trip) {
	return function(dispatch) {
		axios
			.get('/api/triplist')
			.then(function(response) {
				dispatch({ type: GET_TRIP_LIST, payload: response.data });
			})
			.catch(function(err) {
				dispatch({
					type: 'GET_TRIP_LIST_REJECTED',
					msg: 'error when getting the trip from session'
				});
			});
	};
}

export function addToTripList(trip) {
	return function(dispatch) {
		axios
			.post('/api/triplist', trip)
			.then(function(response) {
				dispatch({ type: ADD_TO_TRIP_LIST, payload: response.data });
			})
			.catch(function(err) {
				dispatch({
					type: 'ADD_TO_TRIP_LIST_REJECTED',
					msg: 'error when adding to the trip list'
				});
			});
	};
}
export function deleteTripItem(trip) {
	return function(dispatch) {
		axios
			.post('/api/triplist', trip)
			.then(function(response) {
				dispatch({ type: DELETE_TRIP_ITEM, payload: response.data });
			})
			.catch(function(err) {
				dispatch({
					type: 'DELETE_TRIP_ITEM_REJECTED',
					msg: 'error when deleting from the trip list'
				});
			});
	};
}
