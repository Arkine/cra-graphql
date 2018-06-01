import React from 'react';

export default class LoginForm extends React.Component {
	
    render() {
        return (
            <form className="LoginForm" method="POST">
                <input
                    // value={this.state.email}
					name="email"
                    type="email"
                    placeholder="Email"
                />
                <input
                    // value={this.state.password}
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