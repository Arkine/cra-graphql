import React from 'react';

import LoginForm from '../forms/LoginForm';

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