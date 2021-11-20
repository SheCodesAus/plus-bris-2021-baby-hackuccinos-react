import React, { useEffect, useHistory, useState }  from "react";
import { Link } from "react-router-dom";
import TitleForms from '../../components/TitleForms/TitleForms';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

function RegistrationPage()  {
    return (
    <div class="form-page">
        <TitleForms />
        <p>We understand everyone's recipe for success is unique. Let's add your recipe below, to become part of the Cupcake Coder tribe!</p>
        <RegistrationForm />
    </div>
    )

}


export default RegistrationPage;