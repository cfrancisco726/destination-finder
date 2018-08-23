import {
	GET_TRIP_LIST,
	ADD_TO_TRIP_LIST,
	DELETE_TRIP_ITEM
} from '../actions/types';

export default function(state = null, action) {
	switch (action.type) {
		case GET_TRIP_LIST:
			return {
				cart: action.payload || false
			};
		case ADD_TO_TRIP_LIST:
			return {
				cart: action.payload || false
			};
			break;
		case DELETE_TRIP_ITEM:
			return {
				cart: action.payload || false
			};
			break;
	}
	return state;
}
