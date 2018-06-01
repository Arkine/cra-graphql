import React from 'react';
import { Link } from 'react-router-dom';

import {
	PrimaryNavigationContainer,
} from 'styles/components/navigation/PrimaryNavigation';

// import { button } from 'styles/components';

export default class PrimaryNavigation extends React.PureComponent {
	render() {
		return (
			<PrimaryNavigationContainer>
				<div>
					<nav>
						<Link to="/">Home</Link>
						<Link to="/events">Events</Link>
						<Link to="/login">Login</Link>
						<Link to="/register">Register</Link>
					</nav>
				</div>
			</PrimaryNavigationContainer>
		);
	}
}