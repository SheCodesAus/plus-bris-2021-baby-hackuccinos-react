import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import TitleForms from '../../components/TitleForms/TitleForms';

function LoginPage() {
    
    return (
        <div class="form-page">
            <TitleForms/>
            <p>Please register below or you've already been crowned a cupcake coder then please login to your account.</p>
            <LoginForm />
        </div>
    )
}

export default LoginPage;

