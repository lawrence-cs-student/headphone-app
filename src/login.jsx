import React from 'react';
import Signin from './signin';
import Signup from './signup'

export default function Login() {
    return (
        <div className="login">
            <Signin />
            <Signup />
        </div>
    )
}