import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import TitleForms from '../../components/TitleForms/TitleForms';

function LoginPage() {

    return (
        <div class="form-page">
            <TitleForms/>
            <p>Please login below or mix up a new cupcake batch by registering if you're yet to join us!</p>
            <LoginForm />
        </div>
    )
}

export default LoginPage;

