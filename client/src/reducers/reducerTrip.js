import { FETCH_TRIP } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_TRIP:
			return action.payload.data || false;
		default:
			return state;
	}
}
