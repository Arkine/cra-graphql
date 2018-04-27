import React from 'react';
import { Link } from 'react-router-dom';

export default class FooterNavigation extends React.PureComponent {
	render() {
		return(
			<div className="FooterNavigation">
				<div className="FooterNavigation__wrapper">
					<nav className="FooterNavigation__nav">
						<Link to="/">Home</Link>
						<Link to="/events">Events</Link>
					</nav>
				</div>
			</div>
		);
	}
}