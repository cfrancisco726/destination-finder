import { FETCH_DESTINATION } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_DESTINATION:
			return action.payload.data || false;
		default:
			return state;
	}
}
