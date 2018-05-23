import { gql } from 'graphql-tag';
import {
	GraphQLString,
	GraphQLID
} from 'graphql';

import EventType from '../../types/eventType';

import eventController from '../../../controllers/eventController';

export default {
	type: EventType,
	description: 'Add an Event',
	args: {
		title: {
			type: GraphQLString
		}
	},
	resolve(parent, args) {
		console.log('adding event:', args.title);
		return eventController.addEvent(args);
	}
};