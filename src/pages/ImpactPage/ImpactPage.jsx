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
                <h1>Showcasing our Impact! </h1>
                    <h2>Our mission is to create lasting impact on the tech 
                    industry throughout Australia and inspire 100,000 women to enter tech by 2025.</h2>
                <p>For more information, or to download our lastest impact report <a href="https://shecodes.com.au/impact-report/">click here.</a></p>
            </div>
            <div>
            <a name="enrolments"></a>
            <Enrolments />
            <a name="placements"></a>
            <Placements />
            <a name="techpursuedrole"></a>
            <TechPursuedRole />
        </div>
    </div>
    )
}
export default ImpactPage;
