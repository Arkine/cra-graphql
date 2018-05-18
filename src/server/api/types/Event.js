import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString
} from "graphql";

export default new GraphQLObjectType({
	name: 'Event',
	description: 'An event',
	fields: {
		id: {
			type: GraphQLID,
			resolve: (root, args, context, info) => {
				return root.id;
			}
		},
		title: {
			type: GraphQLString,
			resolve: (root, args, context, info) => {
				return root.title
			}
		}
	}
})