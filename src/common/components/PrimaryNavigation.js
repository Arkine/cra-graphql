import React from 'react';
import { Link } from 'react-router-dom';

export default class PrimaryNavigation extends React.PureComponent {
	render() {
		return (
			<div className="PrimaryNavigation">
				<div className="PrimaryNavigation__wrapper">
					<nav className="PrimaryNavigation__nav">
						<Link to="/">Home</Link>
						<Link to="/events">Events</Link>
					</nav>
				</div>
			</div>
		);
	}
}