import React from 'react';

import {
	PrimaryNavigation
} from '../navigation';

export default class Header extends React.PureComponent {
	render() {
		return (
			<header>
				<div>
					<PrimaryNavigation />
				</div>
			</header>
		);
	}
}