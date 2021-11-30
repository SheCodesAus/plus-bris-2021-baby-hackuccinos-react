import React from "react";
import "./Header.css";
import Nav from "../Nav/Nav";

function Header() {
    
    return (
        <div class="header">
            <div class="logo">
                <a href="/">
                    <img src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/She-Codes-logo-white.png"/>
                </a>
            </div>
            <Nav />
        </div>
    );
}

export default Header