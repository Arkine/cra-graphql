import React from 'react';

import {
	FooterNavigation
} from '../navigation';

export default class Footer extends React.PureComponent {
	render() {
		return (
			<footer className="Footer">
				<div className="Footer__wrapper">
					<FooterNavigation />
				</div>
			</footer>
		);
	}
}