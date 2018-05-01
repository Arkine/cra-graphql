import React from 'react';

export default class ErrorMessage extends React.PureComponent {
	render() {
		return (
			<div className="error">
				<p>{this.props.message.toString() || 'Oops! Something went wrong'}</p>
			</div>
		);
	}
}