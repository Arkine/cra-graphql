import React from 'react';
import {
	loadEvents
} from '../actions/Events';
import { connect } from 'react-redux';

import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

class EventsFeed extends React.PureComponent {
	componentWillMount() {
		this.props.loadEvents();
	}

	render() {
		const { events, isFetching, failed } = this.props;

		if (!events) {
			return false;
		}
		let eventsContent = null;

		if (isFetching) {
			return <LoadingSpinner />;
		}

		if (failed) {
			return <ErrorMessage message={failed} />
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

const mapStateToProps = state => {
	return {
		events: state.events.events,
		isFetching: state.events.isFetching,
		failed: state.events.failed
	}
}

export default connect(mapStateToProps, { loadEvents })(EventsFeed);