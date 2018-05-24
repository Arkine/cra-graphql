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
       
        console.log('event ID:', args.id);
        
        return eventController.getEvent(args.id);
    }
}