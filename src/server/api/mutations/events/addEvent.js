import { gql } from 'graphql-tag';

/*
    front-end implements:

    this.props.addEventMutation({
        variables: {
            title: this.state.title,
            authorId: this.state.author
        }
    })
*/

// This is just an example for now
// const addEventMutation = gql`
//     mutation($title: String!, $authorId: ID!) {
//         addEvent(title: $title, authorId: $authorId) {
//             id,
//             title
//         }
//     }
// `;