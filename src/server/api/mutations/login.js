import {
	GraphQLString
} from 'graphql';
import passport from 'passport';

import AuthType from '../types/authType';

import { createToken } from '../../controllers/authController';

export default {
	type: AuthType,
	description: 'Add a user',
	args: {
		email: {
			type: GraphQLString
		},
		password: {
			type: GraphQLString
		}
	},
	resolve: async (parent, {email, password}) => {
		const token = await createToken(email, password);
		// console.log('token:', token);

		// passport.authenticate('local', function(err, user, info) {
		// 	// 		if (err) {
		// 	// 			throw new Error(err);
			// 		}

			// 		if (!user) {
			// 			return res.redirect('login');
			// 		}

			// 		req.logIn(user, (err) => {
			// 			if (err) {
			// 				throw new Error(err);
			// 			}
			// 			const redirect = req.query.redirect || '/';
			// 			return res.redirect(redirect);
			// 		})

			// 	})(req, res, next);

		return {
			id: '12345',
			token,
			email,
		};
	}
};