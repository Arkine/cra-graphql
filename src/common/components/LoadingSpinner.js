import React from 'react';

export default class LoadingSpinner extends React.PureComponent {
	render() {
		return (
			<div className="LoadingSpinner">
				<span>Loading...</span>
			</div>
		);
	}
}