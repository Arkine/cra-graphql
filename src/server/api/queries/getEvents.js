import {
	GraphQLObjectType,
	GraphQLList
} from 'graphql';

import Event from '../types/Event';

export default {
	type: new GraphQLList(Event),
	description: "retun all events",
	resolve() {
		return [
			{
				"_id": "test",
				"title": "test titel"
			},
			{
				"_id": "test2",
				"title": "test tite2"
			},
			{
				"_id": "test3",
				"title": "test tite3"
			}
		]
	}
}