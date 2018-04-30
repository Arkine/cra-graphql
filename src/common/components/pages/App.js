import React from 'react';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

// Apply base styles
import 'styles/base';
import { AppWrapper } from 'styles/App';

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