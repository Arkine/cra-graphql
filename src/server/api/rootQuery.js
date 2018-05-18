import {
	GraphQLObjectType
} from 'graphql';

import events from './queries/events/getAllEvents';
import event from './queries/events/getEvent';

// This is where our Query names are set and resolve to
export default new GraphQLObjectType({
	name: 'Query',
	fields: () => ({
		events,
		event
	})
});