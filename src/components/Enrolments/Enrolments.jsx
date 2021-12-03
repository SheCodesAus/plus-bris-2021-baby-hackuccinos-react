import React from "react";
import "./Enrolments.css";
import enrolments from "../../components/static file/enrolments.jpeg";

function Enrolments() {
  return (
    <div class="main-enrol">
      <div class="title-txt">
        <div class="title">
          <h1>Enrolments</h1>
        </div>
        <div class="txt-left">
          <p>
            In the last 5 years, She Codes is proud to have taught 4025 women
            across Australia in a variation of languages: HTML, CSS, Wordpress,
            Python and Django. To find out more about courses She Codes provides{" "}
            <a href="https://shecodes.com.au/learn/"> click here.</a>{" "}
          </p>
        </div>
        <div id="button-div">
          <a href to="https://shecodes.com.au/learn/">
            <button class="section-button">Learn More</button>
          </a>
        </div>
      </div>
      <div class="img">
        <img className="impact-img" src={enrolments} alt="Enrolments" />
      </div>
    </div>
  );
}

export default Enrolments;
