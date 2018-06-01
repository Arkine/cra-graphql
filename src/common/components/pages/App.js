import React from 'react';
import PropTypes from 'prop-types';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

// Apply base styles
import 'styles/base';
import {
	AppWrapper,
	AppContent,
	AppInner
} from 'styles/App';

export default class App extends React.Component {
	render() {
		return (
			<AppWrapper>
				<Header />

				<AppContent>
					<AppInner>
						{this.props.children}
					</AppInner>
				</AppContent>

				<Footer />
			</AppWrapper>
		);
	}
}

App.propTypes = {
	children: PropTypes.node
}