import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

import GET_ALL_EVENTS_QUERY from 'server/api/queries/events/getAllEvents';

class EventsFeed extends React.Component {

	render() {
		const { events, loading, status, error } = this.props;

		let eventsContent = null;

		if (loading || status < 7) {
			return <LoadingSpinner />;
		}
		
		// If there was a query err
		if (status === 8) {
			return <ErrorMessage message={error.message} />
		}

		if (events.length === 0) {
			return <div className="no-results">No events to display.</div>
		}

		eventsContent = events.map((event, index) => {
			return (
				<div key={index}>
					<Link to={`events/${event.id}`}>{event.title}</Link>
				</div>
			);
		});

		return (
			<section>
				<div>
					{eventsContent}
				</div>
			</section>
		);
	}
};

EventsFeed.defaultProps = {
	events: [],
	loading: false,
	status: 7
};

EventsFeed.propTypes = {
	events: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			title: PropTypes.string
		})
	).isRequired,
	loading: PropTypes.bool.isRequired,
	status: PropTypes.number.isRequired,
	error: PropTypes.object
};

export default graphql(GET_ALL_EVENTS_QUERY, {
	props: ({ data }) => ({
		loading: data.loading,
		events: data.events,
		status: data.networkStatus,
		error: data.error
	})
})(EventsFeed);