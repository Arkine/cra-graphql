import {
	GraphQLObjectType
} from 'graphql';

import Event from '../types/Event';

export default {
	type: Event,
	description: "retun all events",
	resolve() {
		return {
			"_id": "test",
			"title": "test titel"
		}
	}
}