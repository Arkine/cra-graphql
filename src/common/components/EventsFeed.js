import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

class EventsFeed extends React.PureComponent {

	render() {
		console.log(this.props);
		const { events, loading, error } = this.props.data;

		let eventsContent = null;

		if (loading) {
			return <LoadingSpinner />;
		}

		if (error) {
			return <ErrorMessage message={error.message} />
		}

		if (events.length === 0) {
			return <div className="no-results">No events to display.</div>
		}

		eventsContent = events.map((event, index) => {
			return (
				<div className="event" key={index}>
					<Link to={`events/${event.id}`}>{event.title}</Link>
				</div>
			);
		});

		return (
			<section className="EventsFeed">
				<div className="EventsFeed__wrapper">
					{eventsContent}
				</div>
			</section>
		);
	}
};

export default graphql(gql`
	query {
		events {
			id,
			title
		}
	}
`)(EventsFeed);