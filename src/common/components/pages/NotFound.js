import React from 'react';

import setTitle from '../data/setTitle';

@setTitle(() => '404: Page Not Found')
export default class NotFound extends React.Component {
	render() {
		return (
			<div className="NotFound">
				<h1>Page Not Found!</h1>
			</div>
		);
	}
}