import {
	GraphQLString,
	GraphQLID
} from 'graphql';

import EventType from '../../types/eventType';

import eventController from '../../../controllers/eventController';

export default {
	type: EventType,
	description: 'Update an Event',
	args: {
		id:{
			type: GraphQLID
		},
		title: {
			type: GraphQLString
		}
	},
	resolve: (parent, args) => {
		console.log('updating event...', args.id);
		
		return eventController.updateEvent(args);
	}
};