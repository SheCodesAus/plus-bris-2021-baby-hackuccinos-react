import React, { useEffect, useHistory, useState }  from "react";
import { Link } from "react-router-dom";
import TitleForms from '../../components/TitleForms/TitleForms';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

function RegistrationPage()  {
    return (
    <div class="form-page">
        <TitleForms />
        <p>Please add your own sweetness to your very own recipe below, to become part of the tribe!</p>
        <RegistrationForm />
    </div>
    )

}


export default RegistrationPage;