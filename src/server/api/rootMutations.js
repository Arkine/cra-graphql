import {
    GraphQLObjectType
} from 'graphql';

// Users
import addUser from './mutations/users/addUser';

// Auth
import register from './mutations/auth/register';
import login from './mutations/auth/login';

// Events
import addEvent from './mutations/events/addEvent';
import updateEvent from './mutations/events/updateEvent';

// Add any sort of CUD operations here
export default new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addEvent,
		updateEvent,
		addUser,
		register,
		login
    }
});