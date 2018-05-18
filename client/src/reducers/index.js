import { combineReducers } from 'redux';
import authReducer from './authReducer';
import destinationReducer from './reducerDestination';

export default combineReducers({
	auth: authReducer,
	destination: destinationReducer
});
