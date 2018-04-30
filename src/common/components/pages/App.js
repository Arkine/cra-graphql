import React from 'react';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

import { AppWrapper, BaseStyles } from 'styles/base';

// Apply base styles
BaseStyles();

export default class App extends React.Component {
	render() {
		return (
			<AppWrapper>
				<Header />

				<main className="inner">
					{this.props.children}
				</main>

				<Footer />
			</AppWrapper>
		);
	}
}