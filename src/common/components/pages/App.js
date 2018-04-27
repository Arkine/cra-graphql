import React from 'react';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

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