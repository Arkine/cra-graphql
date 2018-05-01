import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

// import {
// 	loadEvents
// } from '../actions/Events';
// import { connect } from 'react-redux';

import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

class EventsFeed extends React.PureComponent {
	// componentWillMount() {
	// 	this.props.loadEvents();
	// }

	render() {
		console.log(this.props);
		const { events, loading, error } = this.props.data;

		if (!events) {
			return false;
		}
		let eventsContent = null;

		if (loading) {
			return <LoadingSpinner />;
		}

		if (error) {
			return <ErrorMessage message={error} />
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
				<div clasName="EventsFeed__wrapper">
					{eventsContent}
				</div>
			</section>
		);
	}
};



// const mapStateToProps = state => {
// 	return {
// 		events: state.events.events,
// 		isFetching: state.events.isFetching,
// 		failed: state.events.failed
// 	}
// }

// export default connect(mapStateToProps, { loadEvents })(EventsFeed);
// export default EventsFeed;
export default graphql(gql`
	query getAllEvents {
		events{
			title
		}
	}
`)(EventsFeed);