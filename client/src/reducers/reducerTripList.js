import {
	GET_TRIP_LIST
} from '../actions/types';

export default function(state = null, action) {
	switch (action.type) {
		case 'GET_TRIP_LIST':
			return action.payload.data || false;
			break;
	}
	return state;
}
