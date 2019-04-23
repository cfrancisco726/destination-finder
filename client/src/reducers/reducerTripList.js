export default function(state = { trips: [] }, action) {
	switch (action.type) {
		case 'FETCH_TRIP_LIST':
			return { trips: [...state.trips, ...action.payload] };
			break;
		case 'DELETE_TRIP_ITEM':
			const currentTripToDelete = [...state.trips];

			const indexToDelete = currentTripToDelete.findIndex(record => {
				return record._id == action.payload;
			});

			return {
				trips: [
					...currentTripToDelete.slice(0, indexToDelete),
					...currentTripToDelete.slice(indexToDelete + 1)
				]
			};
			break;

		default:
			return state;
	}
}
