import React, { useEffect, useState }  from "react"
import { Link } from "react-router-dom"
import Footer from "../../components/Footer/Footer";
import error_pic from "../../components/static file/error_pic.png"

function ErrorPage() {
    return (
    <div><h1>404 Error</h1>
    <h3>Oh noooo... the cupcake crumbles, we didn't find what you were looking for.</h3>
    <img className="error_pic" src={error_pic} alt="errorpage"/>
    
    <Footer/>
    </div>
    

    )
}

export default ErrorPage;
