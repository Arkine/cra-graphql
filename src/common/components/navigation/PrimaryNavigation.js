import React from 'react';
import { Link } from 'react-router-dom';

import {
	PrimaryNavigationWrapper,
} from 'styles/components/navigation/PrimaryNavigation';

// import { button } from 'styles/components';

export default class PrimaryNavigation extends React.PureComponent {
	render() {
		return (
			<PrimaryNavigationWrapper>
				<div className="PrimaryNavigation__wrapper">
					<nav className="PrimaryNavigation__nav">
						<Link to="/">Home</Link>
						<Link to="/events">Events</Link>
						<Link to="/login">Login</Link>
					</nav>
				</div>
			</PrimaryNavigationWrapper>
		);
	}
}