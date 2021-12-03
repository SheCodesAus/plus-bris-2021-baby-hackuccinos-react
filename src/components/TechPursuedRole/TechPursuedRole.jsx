import React from "react";
import { Link } from "react-router-dom";
import "./TechPursuedRole.css";
import techrole from "../../components/static file/techrole.png";

function TechPursuedRole() {
  return (
    <div class="intro">
      <h1>Tech Roles</h1>
      <div class="impact-row">
        <p>
          To date, 290 students who have studied with She Codes have pursued a
          Technology Career, as a direct result of completing a She Codes
          Course.
        </p>
        <img className="impact-img" src={techrole} alt="TechPursuedRole" />
      </div>
    </div>
  );
}

export default TechPursuedRole;
