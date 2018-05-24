import React from 'react';

import { graphql } from 'react-apollo';

import REGISTER_USER_QUERY from '../queries/auth/register';

class RegisterForm extends React.Component {
	state = {
		name: '',
		email: '',
		password: '',
		error: ''
	}

	componentDidMount() {
		console.log('props', this.props);
	}

	async submitForm(e) {
		e.preventDefault();
		console.log('form submitting...');

		// try {
			const res = await this.props.registerUserMutation({
				variables: {
					name: this.state.name,
					email: this.state.email,
					password: this.state.password
				},
			});

			res.then(data => {
				console.log('response', data);

			})


			// window.location.pathname = '/login';

		// } catch (e) {
		// 	console.log(Object.keys(e));
		// 	console.log(e)
		// }
		// console.log('user', user);
		// console.log('okay!!', this.props);

		// if (user) {
		// 	window.location.pathname = '/login';
		// }
	}

	render() {
		return (
			<div className="Registration">
				{this.state.error && (
					<div className="Error">{this.state.error}</div>
				)}
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
			</div>
		);
	}
}

export default graphql(REGISTER_USER_QUERY, { 
	name: 'registerUserMutation'
})(RegisterForm);