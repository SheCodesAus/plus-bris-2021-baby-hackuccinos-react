import React, { useEffect, useState }  from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/coders">Coders</Link>
            <Link to="/login">Login</Link>
        </nav>
    )
}


export default Nav;