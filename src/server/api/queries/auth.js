import UserType from '../types/userType';
import jwt from 'jsonwebtoken';

function getUserId(ctx)  {
	const auth = ctx.request.get('Authorization');

	if (auth) {
		const token = auth.replace('Bearer ', '');

		const { userId } = jwt.verify(token, process.env.SECRET);

		return userId;
	}

	throw new Error('You are not authroized');
}

export default {
	type: UserType,
	description: 'Returns the user on the request object.',
	resolve: (root, args, context, info) => {
		console.log('getting me...', context);
		
	}
}