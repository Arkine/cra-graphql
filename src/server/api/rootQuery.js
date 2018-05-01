import {
	GraphQLObjectType
} from 'graphql';

import events from './queries/getEvents';

export default new GraphQLObjectType({
	name: 'Query',
	fields: () => ({
		events
	})
});