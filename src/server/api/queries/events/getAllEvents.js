import {
	GraphQLList
} from 'graphql';

import eventController from '../../../controllers/eventController';

import Event from '../../types/Event';

export default {
	type: new GraphQLList(Event),
	description: "return all events",
	resolve() {
		return eventController.getEvents();
	}
}