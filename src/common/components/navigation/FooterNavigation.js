import React from 'react';
import { Link } from 'react-router-dom';

export default class FooterNavigation extends React.PureComponent {
	render() {
		return(
			<div>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/events">Events</Link>
				</nav>
			</div>
		);
	}
}