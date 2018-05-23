import React from 'react';
import { graphql } from 'react-apollo';

import LoadingSpinner from '../LoadingSpinner';

import GET_EVENT_QUERY from 'server/api/queries/events/getEvent';

class SingleEventPage extends React.Component {

    render() {
        const { event, loading } = this.props.data;
 
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

export default graphql(GET_EVENT_QUERY, { 
    options: (ownProps) => ({
        variables: {
            id: ownProps.match.params.id
        }
    })
})(SingleEventPage); 
