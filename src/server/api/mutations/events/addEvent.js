import {
	GraphQLString,
	GraphQLID
} from 'graphql';

import EventType from '../../types/eventType';

import eventController from '../../../controllers/eventController';

export default {
	type: EventType,
	description: 'Add an event',
	args: {
		title: {
			type: GraphQLString
		}
	},
	resolve: (parent, args) => {
		console.log('adding event:', args.title);
		return eventController.addEvent(args);
	}
};