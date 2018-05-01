import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString
} from "graphql";

export default new GraphQLObjectType({
	name: 'Event',
	description: 'An event',
	fields: {
		_id: {
			type: GraphQLID
		},
		title: {
			type: GraphQLString
		}
	}
})