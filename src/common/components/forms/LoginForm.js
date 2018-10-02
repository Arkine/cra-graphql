import React from 'react';
import { graphql } from 'react-apollo';
import LOGIN_MUTATION from '../../../server/api/queries/login';

class LoginForm extends React.Component {
	state = {
		email: '',
		password: ''
	}

	submitForm = async (e) => {
		e.preventDefault();
		
		try {
			const user = await this.props.loginUser({
				variables: {
					email: this.state.email,
					password: this.state.password
				}
				
			});

			console.log(user);
		} catch (err) {
			console.log('there was an error:', err);
		}

		
	}
	
    render() {
        return (
            <form className="LoginForm" method="POST" onSubmit={this.submitForm.bind(this)}>
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

export default graphql(LOGIN_MUTATION, {
	name: "loginUser"
})(LoginForm)