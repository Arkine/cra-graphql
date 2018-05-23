import {
	GraphQLList
} from 'graphql';

import eventController from '../../../controllers/eventController';

import EventType from '../../types/eventType';

export default {
	type: new GraphQLList(EventType),
	description: "return all events",
	resolve() {
		console.log('Getting all events...');
		return eventController.getEvents();
	}
}