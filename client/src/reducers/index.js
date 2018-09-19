import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as reduxForm } from 'redux-form';
import reducerTrip from './reducerTrip';
import reducerTripList from './reducerTripList';
import reducerTripError from './reducerTripError';

export default combineReducers({
	auth: authReducer,
	form: reduxForm,
	trips: reducerTrip,
	triplist: reducerTripList,
	triperror: reducerTripError
});
