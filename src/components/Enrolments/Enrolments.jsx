import React from "react";
import "./Enrolments.css";
import enrolments from "../../components/static file/enrolments.jpeg";

function Enrolments () {
    return (
        <div class="intro">
            <h1>Enrolments</h1>     
            <div class="impact-row">
                <p>In the last 5 years, She Codes is proud to have taught 4025 women across Australia in a variation of languages: HTML, CSS, Wordpress, Python and Django. To find out more about courses She Codes provides <a href="https://shecodes.com.au/learn/"> click here.</a> </p>
                <img className="impact-img" src={enrolments} alt="Enrolments"/>
            </div>
            </div>
    )
}

export default Enrolments