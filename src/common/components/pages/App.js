import React from 'react';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

import '../../../styles/styles.scss';

export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
				<main className="inner">
					{this.props.children}
				</main>

				<Footer />
			</div>
		);
	}
}