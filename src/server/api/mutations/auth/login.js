import {
	GraphQLString
} from 'graphql';

import AuthType from '../../types/authType';

import authController from '../../../controllers/authController';

export default {
	type: AuthType,
	description: 'Login a user',
	args: {
		email: {
			type: GraphQLString
		},
		password: {
			type: GraphQLString
		},
	},
	resolve: async (parent, {email, password}) => {
		console.log('Loggin in...');
		return await authController.login(email, password);
	}
}