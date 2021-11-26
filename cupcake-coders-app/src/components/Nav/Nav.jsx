import React, { useEffect, useState }  from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        window.localStorage.getItem("token")
    );

    const logout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
    };

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/impact">Impact</Link>
            <Link to="/coders">Coders</Link>
            {isLoggedIn 
            ? (
                <Link onClick={logout}>Log Out</Link>
            ) 
            : ( 
                <div className="login">
                    <Link to="/login">Login</Link>
                </div>
            )}
            <Link to="/submit">Submit</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}


export default Nav;