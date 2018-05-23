import {
	GraphQLObjectType,
	GraphQLString
} from "graphql";

export default new GraphQLObjectType({
	name: 'Auth',
	description: 'Authorization data',
	fields: {
		email: {
			type: GraphQLString,
			resolve: (root, args, context, info) => {
				return root.email
			}
		},
		password: {
			type: GraphQLString,
			resolve: (root, args, context, info) => {
				return root.password
			}
		}
	}
});