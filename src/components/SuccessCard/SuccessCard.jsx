import React from "react";
import { Link } from "react-router-dom";
import "./SuccessCard.css";

function SuccessCard () {
    return (
        <div class="success">
            <h3>Cupcake Success!</h3>
            <p>You have successfully registered your very own cupcake recipe of success. 
                Check out our <a href="/coders">Coders Page</a> to see yourself
                amongst your fellow tribe. Or <a href="/"> head home.</a>
            </p>
        </div>
    )
}

export default SuccessCard