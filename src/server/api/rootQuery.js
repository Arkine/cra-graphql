import {
	GraphQLObjectType
} from 'graphql';

import events from './resolvers/events/getAllEvents';
import event from './resolvers/events/getEvent';

import user from './resolvers/users/getUser';

// This is where our Query names are set and resolve to
export default new GraphQLObjectType({
	name: 'Query',
	fields: () => ({
		events,
		event,
		user
	})
});