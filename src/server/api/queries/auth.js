import UserType from '../types/userType';

export default {
	type: UserType,
	description: 'Returns the user on the request object.',
	resolve: (root, args, context, info) => {
		console.log('getting me...', context);
		
	}
}