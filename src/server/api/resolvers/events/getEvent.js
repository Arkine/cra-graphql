import {
    GraphQLID
} from 'graphql';

import EventType from '../../types/eventType';

import eventController from '../../../controllers/eventController';

export default { 
    type: EventType,
    description: "return single event",
    args: {
        id: { 
            type: GraphQLID 
        }
    },
    resolve(root, args, context, info) {
        // code to get data from DB
        const { id } = args;
        console.log('kevan:', id);
        return eventController.getEvent(id);
    }
}