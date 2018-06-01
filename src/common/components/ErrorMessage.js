import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorMessage extends React.PureComponent {
	render() {
		return (
			<div>
				<p>{this.props.message}</p>
			</div>
		);
	}
}

ErrorMessage.defaultProps = {
	message: 'Oops! Something went wrong'
};

ErrorMessage.propTypes = {
	message: PropTypes.string.isRequired
};