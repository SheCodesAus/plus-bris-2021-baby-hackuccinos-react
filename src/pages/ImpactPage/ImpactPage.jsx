import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import "./ImpactPage.css";
import Enrolments from "../../components/Enrolments/Enrolments";
import Placements from "../../components/Placements/Placements";
import TechPursuedRole from "../../components/TechPursuedRole/TechPursuedRole";


function ImpactPage() {
    return (
        <div className="impact-div">
            <div class='impactintro'>
                <h1>Hello there,</h1>
                <h2>welcome to the world of our "cupcake coders"</h2>
                <p>Insert text here <a href="https://shecodes.com.au/impact-report/">find out more here.</a></p>
            </div>
            <div class ="placementssection">
            <a name="placements"></a>
            <div id="column-1" class="column"><Placements />
            </div>
            <div class ="enrolmentsection">
            <a name="enrolments"></a> 
            <div id="column-2" class="column"><Enrolments />
            </div>
            <div class ="techsection">
            <a name="techpursuedrole"></a>
            <div id="column-3" class="column"><TechPursuedRole />
            </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default ImpactPage;
