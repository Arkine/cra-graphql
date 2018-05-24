import {
	GraphQLSchema
} from 'graphql';

import EventType from './types/eventType';
import UserType from './types/userType';
import AuthType from './types/authType';
import ErrorType from './types/errorType';

import query from './rootQuery';
import mutation from './rootMutations';

export default new GraphQLSchema({
	query,
	mutation,
	types: [
		EventType,
		UserType,
		AuthType,
		// ErrorType
	]
});