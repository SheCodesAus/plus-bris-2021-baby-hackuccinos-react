import React, { useEffect, useState }  from "react"
import { Link } from "react-router-dom"
import "../../App.css";  

function ErrorPage() {
    return (
    <div>
        <div class="success">
            <div>
                <h2 class="crumble">Crumbs! It's a 404!</h2>
            </div>
            <div>
                <Link to="/"><img class="errorpic" src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/error-cupcake-coder.png" alt="errorpage"/></Link>
            </div>
            <div>
                <p>The page or resource you were looking for has not been found.</p>
                <p><Link to="/#top">Make your way back to home</Link> to try again. </p>
            </div>
        </div>
    </div>
    )
}

export default ErrorPage;
