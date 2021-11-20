import React, { useEffect, useHistory, useState }  from "react";
import { Link } from "react-router-dom";
import TitleForms from '../../components/TitleForms/TitleForms';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

function RegistrationPage()  {
    return (
    <div>
        <TitleForms />
        <h1>This is the Registration Page</h1>
        <RegistrationForm />
    </div>
    )

}


export default RegistrationPage;