import React from 'react';
import EventsFeed from './EventsFeed';
import { Link } from 'react-router-dom'

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Home page</h1>
				<Link to="/events">Events</Link>
				<EventsFeed />
			</div>
		);
	}
}