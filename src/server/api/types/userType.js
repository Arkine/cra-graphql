import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
} from "graphql";

export default new GraphQLObjectType({
    name: 'User',
    description: 'A user',
    fields: {
        id: {
            type: GraphQLID,
            resolve: (root, args, context, info) => {
                return root.id;
            }
        },
        name: {
            type: GraphQLString,
            resolve: (root, args, context, info) => {
                return root.name;
            }
        },
		email: {
			type: GraphQLString,
			resolve: (root, args, context, info) => {
				return root.email;
			}
		},
		password: {
			type: GraphQLID,
			resolve: (root, args, context, info) => {
				return this.password;
			}
		}
    }
});