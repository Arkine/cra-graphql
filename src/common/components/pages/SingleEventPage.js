import React from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';

import LoadingSpinner from '../LoadingSpinner';

import GET_EVENT_QUERY from 'server/api/queries/events/getEvent';

class SingleEventPage extends React.Component {

    render() {
		console.log(this.props);

        const { event, loading, status } = this.props;
 
        if (loading || status < 7) {
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

SingleEventPage.defaultProps = {
	event: {
		id: '',
		title: ''
	},
	loading: false,
	status: 7
};

SingleEventPage.propTypes = {
	event: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string
	}).isRequired,
	loading: PropTypes.bool.isRequired,
	status: PropTypes.number.isRequired,
	error: PropTypes.object
};

export default graphql(GET_EVENT_QUERY, { 
    options: (ownProps) => ({
        variables: {
            id: ownProps.match.params.id
        }
    }),
	props: ({ data }) => ({
		event: data.event,
		loading: data.bool,
		status: data.networkStatus,
		error: data.error
	})
})(SingleEventPage); 
