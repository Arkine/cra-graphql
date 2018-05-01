import {
	GraphQLSchema
} from 'graphql';

import Event from './types/Event';
import query from './rootQuery';

export default new GraphQLSchema({
	query,
	types: [
		Event
	]
});