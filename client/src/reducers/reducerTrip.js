export default function(state = [], action) {
	switch (action.type) {
		case 'FETCH_TRIP':
			return action.payload || false;
			break;
		case 'FETCH_TRIP_LIST_REJECTED':
			return {
				...state,
				msg: 'Invalid entry. Please try again'
			};
		default:
			return state;
	}
}
