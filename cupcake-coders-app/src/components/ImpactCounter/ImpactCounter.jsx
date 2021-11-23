import React from "react";
import { Link } from "react-router-dom";
import "./ImpactCounter.css";

function ImpactCounter () {
    return (
        <div class='counter'>
            <div class="circle">
            </div>
            <h1>This is the impact counter</h1>
            <a href="#placements">Placements</a>
        </div>
    )
}

export default ImpactCounter