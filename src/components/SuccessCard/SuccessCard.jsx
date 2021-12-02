import React from "react";
import { Link } from "react-router-dom";
import "./SuccessCard.css";

function SuccessCard () {
    return (
        <div class="success">
            <div>
            <h2>Cupcake Success!</h2>
            </div>
            <div>
            <Link to="/"><img src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/success-cupcake-coder.png"></img></Link>
            </div>
            <div>
            <p>You have successfully registered.
                Check out our <a href="/coders">Coders Page</a> to see yourself
                amongst your fellow tribe. Or <a href="/"> head home.</a>
            </p>
            </div>
        </div>
    )
}

export default SuccessCard