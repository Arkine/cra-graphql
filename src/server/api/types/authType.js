import {
	GraphQLObjectType,
	GraphQLString
} from "graphql";

import UserType from '../types/userType';

export default new GraphQLObjectType({
	name: 'Auth',
	description: 'Authorization data',
	fields: {
		token: {
			type: GraphQLString,
			resolve: (root, args, context, info) => {
				return root.token
			}
		},
		user: {
			type: UserType
		}
	}
});