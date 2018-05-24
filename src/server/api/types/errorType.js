import {
	GraphQLObjectType,
	GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
	name: 'Error',
	description: 'Describes errors',
	fields: {
		key: {
			type: GraphQLString
		},
		message: {
			type: GraphQLString
		}
	}
});