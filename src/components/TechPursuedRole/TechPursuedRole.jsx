import React from "react";
import { Link } from "react-router-dom";
import "./TechPursuedRole.css";
import techrole from "../../components/static file/techrole.png";

function TechPursuedRole() {
  return (
    <div class="main-enrol">
      <div class="title-txt">
        <div class="title">
          <h1>Tech Roles</h1>
        </div>
        <div class="txt-left">
          <p>
            To date, 290 students who have studied with She Codes have pursued a
            Technology Career, as a direct result of completing a She Codes
            Course. Get in touch with our team today to see how we could help you
            step into your tech career. 
          </p>
        </div>
        <div id="button-div">
            <button class="section-button" onClick="location.href='mailto:katebushell@shecodes.com.au';">Get in touch</button>
        </div>
      </div>
      <div class="img">
        <img className="impact-img" src={techrole} alt="TechPursuedRole" />
      </div>
    </div>
  );
}

export default TechPursuedRole;
