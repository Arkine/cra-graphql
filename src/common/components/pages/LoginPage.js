import React from 'react';

import LoginForm from '../forms/LoginForm';

import setTitle from '../data/setTitle';

@setTitle(() => 'Login')
export default class LoginPage extends React.Component {
    render() {
        return (
            <div className="LoginPage">
                <h1>Login</h1>
                <LoginForm />
            </div>
        );
    }
}