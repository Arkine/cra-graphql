import gql from 'graphql-tag';

export default gql`
	mutation($title: String!) {
		addEvent(title: $title) {
			id,
			title
		}
	}
`;