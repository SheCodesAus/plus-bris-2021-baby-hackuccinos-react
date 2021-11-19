import React from "react";
import { Link } from "react-router-dom";
import CoderCard from "../CoderCard/CoderCard";
import "./CoderSection.css";

function CoderSection () {
    return (
    <div class="coder-section-main-div">
        <div class="coder-section-centered-h1">
            <h1>Meet our Cupcake Coder tribe</h1>
        </div>
        <div class="coder-section-h3">
            <h3>These incredible coders have achieved so much,
                whether that be simply new skills or a brand new career 
                in tech! Check out the badges to discover their incredible
                feats!
            </h3>
        </div>
        <CoderCard />
        <div id="coder-section-button">
            <button class="coder-section-button">Meet the whole gang</button>
        </div>
    </div>
    )

}

export default CoderSection