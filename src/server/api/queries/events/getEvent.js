import gql from 'graphql-tag';

export default gql`
    query($id: ID!) {
        event(id: $id) {
            id,
            title
        }
    }
`;