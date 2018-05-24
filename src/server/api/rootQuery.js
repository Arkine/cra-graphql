import {
	GraphQLObjectType
} from 'graphql';

import events from './queries/events/getAllEvents';
import event from './queries/events/getEvent';
import user from './queries/users/getUser';
import me from './queries/auth';

// This is where our Query names are set and resolve to
export default new GraphQLObjectType({
	name: 'Query',
	fields: () => ({
		events,
		event,
		user,
		me
	})
});