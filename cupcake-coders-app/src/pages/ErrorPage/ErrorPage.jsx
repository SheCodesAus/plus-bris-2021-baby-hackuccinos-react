import React, { useEffect, useState }  from "react"
import { Link } from "react-router-dom"
import Footer from "../../components/Footer/Footer";
import error_pic from "../../components/static file/error_pic.png";
import crumb1 from "../../components/static file/crumb-1.png";
import crumb2 from "../../components/static file/crumb-2.png";
import crumb3 from "../../components/static file/crumb-3.png";
import "../../App.css";  

function ErrorPage() {
    return (
    <div>
        <div>
            <h1 class="page404">404 Error</h1>
            <h2 class="crumble">Oh noooo... cupcake crumbles</h2>
            <Link to="/"><img className="error_pic" src={error_pic} alt="errorpage"/></Link>
            
        </div>
    </div>
    )
}

export default ErrorPage;
