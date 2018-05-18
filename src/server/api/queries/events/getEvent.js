import {
    GraphQLID,
    Input
} from 'graphql';

import EventType from '../../types/Event';

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
        const { id } = args;
        console.log('kevan:', id);
        return eventController.getEvent(id);
    }
}