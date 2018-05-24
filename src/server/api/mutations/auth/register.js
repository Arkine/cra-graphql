import {
	GraphQLString
} from 'graphql';
import validator from 'validator';

import AuthType from '../../types/authType';

import authController from '../../../controllers/authController';
import RegisterError from '../../errors/auth/registerError';
import ValidationErrror from '../../errors/validationError';

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

		let errors = [];

		if (validator.isEmpty(name)) {
			errors.push({
				key: 'name',
				message: 'Name field must not be empty'
			});
		}

		if (!validator.isLength(name, { min: 3 })) {
			errors.push({
				key: 'name',
				message: 'Name field must be at least 3 characters in length'
			});
		}

		if (!validator.isEmail(email)) {
			errors.push({
				key: 'email',
				message: 'Please provide a valid email'
			});
		}

		if (!validator.isLength(password, { min: 6, max: 20 })) {
			errors.push({
				key: 'password',
				message: 'Password must be between 6 and 20 characters in length'
			});
		}

		if (errors.length) {
			return { errors };
		}
		
		try {
			return await authController.register(name, email, password);
		} catch (e) {
			throw new RegisterError();
		}
	}
}