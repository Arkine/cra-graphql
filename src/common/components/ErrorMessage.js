import React from 'react';

export default class ErrorMessage extends React.PureComponent {
	render() {
		console.log(this.props.message.toString())
		return (
			<div className="error">
				<p>{this.props.message.toString() || 'Oops! Something went wrong'}</p>
			</div>
		);
	}
}