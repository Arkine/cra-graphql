import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import ADD_EVENT_MUTATION from './queries/events/addEvent';
import GET_ALL_EVENTS_QUERY from './queries/events/getAllEvents';

class AddEvent extends React.Component {
	state = {
		title: ''
	}

	submitForm(e) {
		e.preventDefault();

		this.props.addEventMutation({
			variables: {
				title: this.state.title
			},
			refetchQueries: [{ query: GET_ALL_EVENTS_QUERY }]
		});
	}

	render() {
		return (
			<form onSubmit={this.submitForm.bind(this)}>
				<div className="field">
					<label>
						Event Title:
					</label>
					<input type="text" onChange={(e) => this.setState({ title: e.target.value })} />
				</div>

				<button>Add Event</button>
			</form>
		);
	}
}

AddEvent.defaultProps = {
	addEventMutation: () => {}
};

AddEvent.propTypes = {
	addEventMutation: PropTypes.func.isRequired,
}

export default graphql(ADD_EVENT_MUTATION, { name: 'addEventMutation' })(AddEvent); 