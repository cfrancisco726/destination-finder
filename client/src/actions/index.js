import axios from 'axios';
import {
	FETCH_USER,
	FETCH_TRIP,
	GET_CART,
	ADD_TO_CART,
	DELETE_CART_ITEM
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

export function getCart(cart) {
	return function(dispatch) {
		axios
			.get('/api/cart')
			.then(function(response) {
				dispatch({ type: GET_CART, payload: response.data });
			})
			.catch(function(err) {
				dispatch({
					type: 'GET_CART_REJECTED',
					msg: 'error when getting the cart from session'
				});
			});
	};
}

export function addToCart(cart) {
	return function(dispatch) {
		axios.post('/api/cart', cart);
		console
			.log(cart)
			.then(function(response) {
				dispatch({ type: ADD_TO_CART, payload: response.data });
			})
			.catch(function(err) {
				dispatch({
					type: 'ADD_TO_CART_REJECTED',
					msg: 'error when adding to the cart'
				});
			});
	};
}
export function deleteCartItem(cart) {
	return function(dispatch) {
		axios
			.post('/api/cart', cart)
			.then(function(response) {
				dispatch({ type: DELETE_CART_ITEM, payload: response.data });
			})
			.catch(function(err) {
				dispatch({
					type: 'DELETE_CART_ITEM_REJECTED',
					msg: 'error when deleting from the cart'
				});
			});
	};
}
