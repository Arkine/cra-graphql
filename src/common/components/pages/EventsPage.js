import React from 'react';

import {
	EventsFeed,
	AddEvent
} from '../';

import setTitle from '../data/setTitle';

@setTitle('Events')
export default class EventsPage extends React.Component {
	render() {
		return(
			<div className="EventsPage">
				<h1>Events</h1>
				<EventsFeed />
				<AddEvent />
			</div>
		);
	}
}
