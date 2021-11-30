import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import "./ImpactPage.css";
import Enrolments from "../../components/Enrolments/Enrolments";
import Placements from "../../components/Placements/Placements";
import TechPursuedRole from "../../components/TechPursuedRole/TechPursuedRole";


function ImpactPage() {
    return (
            <div class="impact-div">
            <div class="impact-intro">
            <h1>Hello there,</h1>
                <h2>welcome to the world of our "cupcake coders"</h2>
                <p>Insert text here <a href="https://shecodes.com.au/impact-report/">find out more here.</a></p>
            </div>
            <div class="impact-sections">
                <Placements/>
            </div>
            <div class="enrolments">
                <Enrolments/>
            </div>
            <div class="techpursued">
                <TechPursuedRole/>
            </div>
    </div>
    )
}
export default ImpactPage;
