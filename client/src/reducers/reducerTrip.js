export default function(state = { trips: [] }, action) {
	console.log('state',action.payload)
	switch (action.type) {
		case 'FETCH_TRIP':
			return {
				trips: [...action.payload],
				msg: ''
			};
			break;
		case 'FETCH_TRIP_REJECTED':
			return {
				msg: 'Invalid entry. Please try again.'
			};

		default:
			return state;
	}

}
