import {
	GraphQLList
} from 'graphql';

import eventController from '../../../controllers/eventController';

import EventType from '../../types/eventType';

export default {
	type: new GraphQLList(EventType),
	description: "return all events",
	resolve() {
		return eventController.getEvents();
	}
}