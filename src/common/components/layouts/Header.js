import React from 'react';

import {
	PrimaryNavigation
} from '../navigation';

export default class Header extends React.PureComponent {
	render() {
		return (
			<header className="Header">
				<div className="Header__wrapper">
					<PrimaryNavigation />
				</div>
			</header>
		);
	}
}