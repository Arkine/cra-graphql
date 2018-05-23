import React from 'react';
import PropTypes from 'prop-types';

export default class HomePage extends React.Component {
	render() {
		const { isAuthenticated } = this.props;

		return(
			<div className="HomePage">
				<h1>Home</h1>
				{!isAuthenticated && 
					<div className="content">
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