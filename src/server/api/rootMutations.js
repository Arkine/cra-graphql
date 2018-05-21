import {
    GraphQLObjectType
} from 'graphql';

// Example import
// import addUser from '..';
import addEvent from './mutations/events/addEvent';

// Add any sort of CUD operations here
export default new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addEvent
    }
});