import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as reduxForm } from 'redux-form';
import reducerTrip from './reducerTrip';
import reducerTripList from './reducerTripList';

export default combineReducers({
	auth: authReducer,
	form: reduxForm,
	trips: reducerTrip,
	tripsList: reducerTripList
});
