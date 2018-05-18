import React from 'react';

const AUTH_TOKEN = "test"; // TODO: do NOT store Auth token locally

export default class LoginForm extends React.Component {
    state = {
        login: true, // Switch between login and signup
        email: '',
        password: '',
        name: ''
    }

    _confirm = async () => {

    }

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token); // TODO: do NOT store Auth token locally
    }

    render() {
        return (
            <div className="LoginForm">
                { !this.state.login && (
                    <input
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                        type="text"
                        placeholder="Name"
                    />
                )}

                <input
                    value={this.state.email}
                    onChange={e  => this.setState({name: e.target.value })}
                    type="email"
                    placeholder="Email"
                />
                <input
                    value={this.state.password}
                    onChange={e => this.setState({ name: e.target.value })}
                    type="password"
                    placeholder="Password"
                />

                <div>
                    <div className="button submit" onClick={() => this._confirm()}>Login</div>
                </div>
            </div>
        );
    }
}