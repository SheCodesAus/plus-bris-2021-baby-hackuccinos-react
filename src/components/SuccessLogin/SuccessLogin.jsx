import React from "react";
import { Link } from "react-router-dom";
import "./SuccessLogin.css";

function SuccessLogin () {
    return (
        <div class="success">
            <div>
            <   h1>Success!</h1>
            </div>
            <div>
                <h2>Login Success!</h2>
            </div>
            <div>
                <Link to="/"><img src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/success-cupcake-coder.png"></img></Link>
            </div>
            <div>
                <p>You have successfully logged in. 
                Create your new cupcake coder profile <a href="/submit">using this form here</a>. 
                Or <a href="/impact"> explore coder impact here</a>
                </p>
            </div>
        </div>
    )
}

export default SuccessLogin