import React from "react";
import { Link } from "react-router-dom";
import "./SuccessLogin.css";

function SuccessLogin () {
    return (
        <div class="success">
            <div>
                <h2>Login Success!</h2>
            </div>
            <div>
                <Link to="/"><img src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/success-cupcake-coder.png"></img></Link>
            </div>
            <div>
                <p>You have been successful! 
                Check out <Link to="/coders">coders here.</Link>
                Or <Link to="/impact"> explore coder impact here</Link>
                </p>
            </div>
        </div>
    )
}

export default SuccessLogin