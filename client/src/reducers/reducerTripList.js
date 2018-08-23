export default function(state = [], action) {
	switch (action.type) {
		case 'FETCH_TRIP_LIST':
			console.log('tripreducer', action.payload);
			return action.payload|| false;
		default:
			return state;
	}
}
