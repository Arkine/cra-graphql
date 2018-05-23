import gql from 'graphql-tag';

export default gql`
	mutation($name: String!, $email: String!, $password: String!) {
		addUser(name: $name, email: $email, password: $password) {
			id,
			name,
			email
		}
	}
`;