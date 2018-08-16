import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as reduxForm } from 'redux-form';
import tripReducer from './reducerTrip';

export default combineReducers({
	auth: authReducer,
	form: reduxForm,
	trips: tripReducer
});
