import {
	GraphQLObjectType,
	GraphQLList
} from 'graphql';

import eventController from '../../controllers/eventController';

import Event from '../types/Event';

export default {
	type: new GraphQLList(Event),
	description: "retun all events",
	resolve() {
		return eventController.getEvents();
	}
}