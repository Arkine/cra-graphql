import React from 'react';

import { graphql } from 'react-apollo';

import REGISTER_USER_QUERY from 'server/api/queries/users/addUser';

class RegisterForm extends React.Component {
	state = {
		name: '',
		email: '',
		password: ''
	}

	submitForm(e) {
		e.preventDefault();

		this.props.registerUserMutation({
			variables: {
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			}
		});
	}

	render() {
		return (
			<form onSubmit={this.submitForm.bind(this)}>
				 <input
                    value={this.state.name}
					onChange={e => this.setState({name: e.target.value}) }
					name="name"
                    type="text"
                    placeholder="Name"
                />

			    <input
                    value={this.state.email}
					onChange={e => this.setState({email: e.target.value}) }
					name="email"
                    type="email"
                    placeholder="Email"
                />
                <input
                    value={this.state.password}
					onChange={e => this.setState({password: e.target.value}) }
					name="password"
                    type="password"
                    placeholder="Password"
                />

                <div>
                    <button className="button submit">Login</button>
                </div>
			</form>
		);
	}
}

export default graphql(REGISTER_USER_QUERY, { name: 'registerUserMutation' })(RegisterForm);