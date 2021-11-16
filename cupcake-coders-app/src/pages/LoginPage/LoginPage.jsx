import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

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
            {
            isRegistering 
            ? (<div class="login-page">      
                <h2>Register for Cupcake Coders</h2>
                <LoginForm />
                <h3>Already have an account? Click below to login.</h3>
                <ToggleButton/>
            </div>)
            : (<div class="login-page">      
                <h2>Login to Cupcake Coders Portal</h2>
                <LoginForm/>
                <h3>Not yet registered? Click below to get started.</h3>
                <ToggleButton/>
            </div>)
            }
        </div>
    )
}

export default LoginPage;

