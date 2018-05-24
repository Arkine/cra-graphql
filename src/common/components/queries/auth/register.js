import gql from 'graphql-tag';

export default gql`
	mutation($name: String!, $email: String!, $password: String!) {
		register(name: $name, email: $email, password: $password) {
			user {
				id
			},
			errors {
				key,
				message
			}
		}
	}
`;