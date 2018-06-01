import React from 'react';
import { Link } from 'react-router-dom';

import {
	NavWrapper
} from '../../../styles/components/layouts/Footer.js';


export default class FooterNavigation extends React.PureComponent {
	render() {
		return(
			<div>
				<NavWrapper>
					<Link to="/">Home</Link>
					<Link to="/events">Events</Link>
				</NavWrapper>
			</div>
		);
	}
}