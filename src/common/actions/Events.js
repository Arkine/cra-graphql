import axios from 'axios';

const apiUrl = "http://localhost:7777/api"

export const eventActionNames = {
	GET_EVENTS_STARTED: "GET_EVENTS_STARTED",
	GET_EVENTS_SUCCESS: "GET_EVENTS_SUCCESS",
	GET_EVENTS_FAILED: "GET_EVENTS_FAILED",
};

export function loadEvents() {
	return (dispatch) => {
		dispatch({ type: eventActionNames.GET_EVENTS_STARTED });

		axios.get(`${apiUrl}/v1/events`)
			.then(res => {
				let events = res.data;

				dispatch({type: eventActionNames.GET_EVENTS_SUCCESS, events});
			})
			.catch((err) => {
				dispatch({
					type: eventActionNames.GET_EVENTS_FAILED,
					message: err
				});
			});
	}
}