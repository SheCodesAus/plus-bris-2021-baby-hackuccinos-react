import React from "react";
import { Link } from "react-router-dom";
import "./Placements.css";
import placements from "../../components/static file/placements.jpeg";

function Placements() {
  return (
    <div class="intro">
      <h1>Placements</h1>
      <div class="impact-row">
        <img className="impact-img" src={placements} alt="Placements" />
        <p>
          128 students who have studied with She Codes have successfully placed
          a career with a technology partner, as a direct result of completing
          She Codes Course. Click{" "}
          <a href="https://shecodes.com.au/partner-with-us/"> here </a> to find
          out more about our Technology Partners.
        </p>
      </div>
    </div>
  );
}

export default Placements;
