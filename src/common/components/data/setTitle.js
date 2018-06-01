import React from 'react';

const setTitle = (getTitle) => (WrappedComponent) => {
	return class extends React.Component {
		updatedTitle = (props) => {
			// Check if the callback has returned something
			// If so, update the title
			const title = getTitle(props);
			if (title) {
				document.title = title;
			}
		}

		componentDidMount() {
			this.updatedTitle(this.props);
		}

		componentWillReceiveProps(props) {
			this.updatedTitle(props);
		}

		render() {
			return <WrappedComponent {...this.props} />
		}
	}
}

export default setTitle;