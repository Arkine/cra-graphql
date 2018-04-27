import React from 'react';

import {
	PrimaryNavigation
} from '../';

export default class App extends React.Component {
	render() {
		return (
			<main className="App">
				<PrimaryNavigation />

				{this.props.children}
			</main>
		);
	}
}