import React from 'react';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

import '../../../styles/styles.scss';

export default class App extends React.Component {
	render() {
		return (
			<main className="App">
				<Header />

				{this.props.children}

				<Footer />
			</main>
		);
	}
}