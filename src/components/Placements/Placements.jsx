import React from "react";
import { Link } from "react-router-dom";
import "./Placements.css";
import placements from "../../components/static file/placements.jpeg";

function Placements() {
  return (
    <div class="main">
      <div class="title-img">
        <div class="img">
          <img className="impact-img" src={placements} alt="Placements" />
        </div>
      </div>
      <div class="txt-button">
        <div class="title">
          <h1>Placements</h1>
        </div>
        <div class="txt">
          <p>
          128 students who have studied with She Codes have successfully placed
          a career with a technology partner, as a direct result of completing
          She Codes Course. Click{" "}
          <a href="https://shecodes.com.au/partner-with-us/"> here to find
          out more about our Technology Partners. </a> 
          </p>
        </div>
        <div id="button-div">
          <a href to="https://shecodes.com.au/learn/">
            <button class="alt-section-button">Learn More</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Placements;
