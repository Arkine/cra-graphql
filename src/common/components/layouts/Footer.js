import React from 'react';

import {
	FooterNavigation
} from '../navigation';

export default class Footer extends React.PureComponent {
	render() {
		return (
			<footer>
				<div>
					<FooterNavigation />
				</div>
			</footer>
		);
	}
}