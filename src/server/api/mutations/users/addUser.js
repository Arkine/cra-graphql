import { gql } from 'graphql-tag';
import {
	GraphQLString
} from 'graphql';

import UserType from '../../types/userType';

import userController from '../../../controllers/userController';

export default {
	type: UserType,
	description: 'Add a user',
	args: {
		name: {
			type: GraphQLString
		},
		email: {
			type: GraphQLString
		},
		password: {
			type: GraphQLString
		}
	},
	resolve(parent, args) {
		return userController.addUser(args);
	}
};