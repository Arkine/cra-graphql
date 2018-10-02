import {
	GraphQLObjectType,
	GraphQLString
} from "graphql";

export default new GraphQLObjectType({
	name: 'Auth',
	description: 'Authorization data',
	fields: {
		id: {
			type: GraphQLString,
			resolve: (root, args, context, info) => {
				return root.id;
			}
		},
		token: {
			type: GraphQLString,
			resolve: (root, args, context, info) => {
				return root.token;
			}
		},
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