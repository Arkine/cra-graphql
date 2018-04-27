import { eventActionNames } from '../actions/Events';

const initialState = {
	events: [],
	isFetching: false,
	failed: false
}

export default (state = initialState, action) => {
	switch(action.type) {
		case eventActionNames.GET_EVENTS_STARTED:
			return {
				...state,
				isFetching: true
			}
		case eventActionNames.GET_EVENTS_SUCCESS:
			return {
				...state,
				events: action.events,
				isFetching: false,
				failed: false
			}
		case eventActionNames.GET_EVENTS_FAILED:

			return {
				...state,
				isFetching: false,
				failed: action.message
			}
		default:
			return state;
	}
}