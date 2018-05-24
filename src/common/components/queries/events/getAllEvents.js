import gql from 'graphql-tag';

export default gql`
	query {
		events {
			id,
			title
		}
	}
`;
