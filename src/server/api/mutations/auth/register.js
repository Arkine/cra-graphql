import {
	GraphQLString
} from 'graphql';

import AuthType from '../../types/authType';

import authController from '../../../controllers/authController';

export default {
	type: AuthType,
	description: 'Sign up a user',
	args: {
		name: {
			type: GraphQLString
		},
		password: {
			type: GraphQLString
		},
		email: {
			type: GraphQLString
		}
	},
	resolve: async (parent, {name, email, password}) => {
		console.log('registering user...');
		return await authController.register(name, email, password);
	}
}