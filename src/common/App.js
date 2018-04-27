import React from 'react';
import EventsFeed from './components/EventsFeed';


export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Home page</h1>
				<EventsFeed />
			</div>
		);
	}
}