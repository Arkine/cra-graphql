import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import LoadingSpinner from '../LoadingSpinner';

class SingleEventPage extends React.Component {
    render() {
        const { event, loading } = this.props;
        console.log(this.props)
        if (loading) {
            return (
                <LoadingSpinner />
            )
        }

        if (!event) {
            return null;
        }
        return (
            <div className="SingleEventPage">
                <h1>{event.title}</h1>
            </div>
        );
    }
}

export default graphql(gql`
    query {
        event(id: $id) {
            id,
            title
        }
    }
`)(SingleEventPage)
