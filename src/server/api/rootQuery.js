import {
	GraphQLObjectType
} from 'graphql';

import getEvents from './queries/getEvents';

export default new GraphQLObjectType({
	name: 'Query',
	fields: () => ({
		getEvents
	})
});