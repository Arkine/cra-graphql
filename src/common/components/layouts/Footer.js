import React from 'react';

// import {
// 	FooterNavigation,
// } from '../navigation';

import {
	Wrapper
} from '../../../styles/components/layouts/Footer';

export default class Footer extends React.PureComponent {
	render() {
		return (
			<footer>
				<Wrapper>
					<span>Copyright {`${new Date().getFullYear()}`} </span>
				</Wrapper>
			</footer>
		);
	}
}