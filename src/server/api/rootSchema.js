import {
	GraphQLSchema
} from 'graphql';

import Event from './types/eventType';

import query from './rootQuery';
import mutation from './rootMutations';

export default new GraphQLSchema({
	query,
	mutation,
	types: [
		Event
	]
});