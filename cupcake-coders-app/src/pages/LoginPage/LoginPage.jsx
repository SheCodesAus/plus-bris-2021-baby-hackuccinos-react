import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import TitleForms from '../../components/TitleForms/TitleForms';

function LoginPage() {

    const [isRegistering, setIsRegistering] = useState(false)

    const ToggleButton = () => {
        return (
            <div>
                <button onClick={() => setIsRegistering(!isRegistering)}>Sign up</button>
            </div>
        )
    }

    return (
        <div>
            <TitleForms/>
            <p>Please login below or mix up a new cupcake batch by registering if you're yet to join us!</p>
            {
            isRegistering 
            ? (<div class="login-page">      
                <h2 class="auth-h2">Login</h2>
                <LoginForm />
                <h3>Already have an account? Click below to login.</h3>
                <ToggleButton/>
            </div>)
            : (<div class="login-page">
                <h2 class="auth-h2">Register</h2>      
                <LoginForm/>
                <h3>Not yet registered? Click below to get started.</h3>
                <ToggleButton/>
            </div>)
            }
        </div>
    )
}

export default LoginPage;

