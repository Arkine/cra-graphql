import {
    GraphQLID
} from 'graphql';

import UserType from '../../types/userType';

export default { 
    type: UserType,
    description: "return single user",
    args: {
        id: { 
            type: GraphQLID 
        }
    },
    resolve(root, args, context, info) {
       console.log('getting user...');
        // console.log('event );
        
        // return eventController.getEvent(args.id);
    }
}