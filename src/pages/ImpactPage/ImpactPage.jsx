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
                <div class="row">
                    <div class="column">
                        <div class="placements-img">
                        <a name="placements-img"></a>
                            <placements-img />
                        </div>
                    </div>
                    <div class="column">
                        <div class='placements'>
                        <a name="placements"></a>
                            <placements-desc />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <div class="enrolments">
                        <a name="enrolments"></a>
                            <enrolments />
                        </div>
                    </div>
                    <div class="column">
                        <div class='enrolments-img '>
                        <a name="enrolments-img "></a>
                            <enrolments-img  />
                    </div>
                    </div>
                </div>
                <div class="row">
                <div class="column">
                <div class="techpursued-img">
                        <a name="techpursued-img"></a>
                            <techpursued-img />
                        </div>
                    </div>
                    <div class="column">
                        <div class='techpursued'>
                        <a name="techpursued"></a>
                            <techpursued />
                        </div>
                    </div>
                    </div>
                    </div>
    </div>
    )
}
export default ImpactPage;
