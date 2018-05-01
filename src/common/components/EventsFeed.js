import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

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

		eventsContent = events.map((event, index) => {
			return (
				<div className="event" key={index}>
					{event.title}
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
	query getAllEvents {
		events{
			title
		}
	}
`)(EventsFeed);