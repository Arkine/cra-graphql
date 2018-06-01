import React from 'react';
import PropTypes from 'prop-types';

import setTitle from '../data/setTitle';

@setTitle(() => "Home")
export default class HomePage extends React.Component {
	render() {
		const { isAuthenticated } = this.props;

		return(
			<div>
				<h1>Home</h1>
				{!isAuthenticated && 
					<div>
						Welcome to My Site
					</div>
				}
			</div>
		);
	}
}

HomePage.defaultProps = {
	isAuthenticated: false,
}

HomePage.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired
}