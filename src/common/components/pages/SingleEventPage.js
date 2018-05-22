import React from 'react';
import { graphql } from 'react-apollo';

import LoadingSpinner from '../LoadingSpinner';

import GET_EVENT_QUERY from 'server/api/queries/getEvent';

class SingleEventPage extends React.Component {
    componentDidMount() {
        // console.log('props', this.props);
    
        // if (!this.props.getEventQuery) {
        //     return null;
        // } 
        // console.log("asdasdasdaspidjapj");
        // console.log('shit is changing');
        // this.props.getEventQuery({
        //     variables: {
        //         id: "5acfe45d99561370c3e1b679" 
        //     }
        // });
    }

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
