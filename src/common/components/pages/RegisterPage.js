import React from 'react';

import RegisterForm from '../forms/RegisterForm';

export default class RegisterPage extends React.Component {
    render() {
        return (
            <div className="RegisterPage">
                <h1>Register</h1>
                <RegisterForm />
            </div>
        );
    }
};