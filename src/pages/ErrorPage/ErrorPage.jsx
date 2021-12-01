import React, { useEffect, useState }  from "react"
import { Link } from "react-router-dom"
import error_pic from "../../components/static file/error_pic.png";
import "../../App.css";  

function ErrorPage() {
    return (
    <div>
        <div>
            <h1 class="crumble">Oh noooo... cupcake crumbles</h1>
            <h2 class="page404">Go back to home page</h2>
            <Link to="/"><img className="error_pic" src={error_pic} alt="errorpage"/></Link>
            
        </div>
    </div>
    )
}

export default ErrorPage;
