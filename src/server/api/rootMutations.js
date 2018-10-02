import {
    GraphQLObjectType
} from 'graphql';

import addEvent from './mutations/events/addEvent';
import updateEvent from './mutations/events/updateEvent';
import addUser from './mutations/users/addUser';
import login from './mutations/login';

// Add any sort of CUD operations here
export default new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addEvent,
		updateEvent,
		addUser,
		login
    }
});