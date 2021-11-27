import React from "react";
import { Link } from "react-router-dom";
import "./ImpactCounter.css";

function ImpactCounter () {
    return (
        <div class='counter'>
            <div class="impact-circle" onclick="location.href='https://shecodes.com.au/partner-with-us/">
                <div class="circle">
                    <div class="number">
                        <h2>4065</h2>
                    </div>
                </div>
                <div class="impact-label">
                    <h3>Women taught</h3>
                    <a href="#enrolments">find out more</a>
                </div>
            </div>
            <div class="impact-circle">
                <div class="circle">
                    <div class="number">
                        <h2>290</h2>
                    </div>
                </div>
                <div class="impact-label">
                    <h3>Pursued tech careers</h3>
                    <a href="#techpursuedrole">find out more</a>
                </div>
            </div>
            <div class="impact-circle">
                <div class="circle">
                    <div class="number">
                        <h2>128</h2>
                    </div>
                </div>
                <div class="impact-label">
                    <h3>Direct hires with partners</h3>
                    <a href="#placements">find out more</a>
                </div>
            </div>
        </div>
    )
}

export default ImpactCounter