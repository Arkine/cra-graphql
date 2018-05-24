import React from 'react';

import { graphql } from 'react-apollo';

import LOGIN_USER_QUERY from '../queries/auth/login';

class LoginForm extends React.Component {
	state = {
		email: '',
		password: ''
	}

	async submitForm(e) {
		e.preventDefault();

		const user = await this.props.loginUserMutation({
			variables: {
				email: this.state.email,
				password: this.state.password
			}
		});

		console.log("props", this.props);
		console.log("user resp", user);


		if (user) {
			console.log('logged in!', user);
		}
	}
	
    render() {
        return (
            <form className="LoginForm" onSubmit={this.submitForm.bind(this)}>
                <input
                    value={this.state.email}
					onChange={e => this.setState({email: e.target.value})}
					name="email"
                    type="email"
                    placeholder="Email"
                />
                <input
                    value={this.state.password}
					onChange={e => this.setState({password: e.target.value})}
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

export default graphql(LOGIN_USER_QUERY, {
	name: 'loginUserMutation'
})(LoginForm);