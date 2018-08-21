import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as reduxForm } from 'redux-form';
import tripReducer from './reducerTrip';
import cartReducer from './reducerCart';

export default combineReducers({
	auth: authReducer,
	form: reduxForm,
	trips: tripReducer,
	cart: cartReducer
});
