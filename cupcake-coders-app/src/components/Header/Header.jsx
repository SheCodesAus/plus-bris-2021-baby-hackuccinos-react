import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    
    return (
        <div class="header">
            <a href="https://fundare.herokuapp.com/">
                <img src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/SheCodes-01.png"/>
            </a>
            <h3>Cupcake Coders</h3>
        </div>
    );
}

export default Header