import { GET_CART, ADD_TO_CART, DELETE_CART_ITEM } from '../actions/types';

export default  function(state = null, action) {
	switch (action.type) {
		case GET_CART:
			return {
				cart: action.payload || false
			};
		case ADD_TO_CART:
			return {
				cart: action.payload || false
			};
			break;
		case DELETE_CART_ITEM:
			return {
				cart: action.payload || false
			};
			break;
	}
	return state;
}
