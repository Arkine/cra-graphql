import { combineReducers } from 'redux';
import events from './events';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
	events,
	router: routerReducer
});