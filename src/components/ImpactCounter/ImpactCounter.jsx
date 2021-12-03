import React, { useEffect, useState } from "react";
import "./ImpactCounter.css";
import { HashLink as Link } from "react-router-hash-link";

function ImpactCounter() {
  const easeOutQuad = (t) => t * (2 - t);
  const frameDuration = 1000 / 60;

  const CountUpAnimation = ({ children, duration = 2000 }) => {
    const countTo = parseInt(children, 10);
    const [count, setCount] = useState(100);

    useEffect(() => {
      let frame = 0;
      const totalFrames = Math.round(duration / frameDuration);
      const counter = setInterval(() => {
        frame++;
        const progress = easeOutQuad(frame / totalFrames);
        setCount(countTo * progress);

        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
    }, []);

    return Math.floor(count);
  };

  const [enrolments, setEnrolments] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}coders/enrolments/`)
      .then((results) => {
        console.log("This is the no. of enrolments", results);
        return results.json();
      })
      .then((data) => {
        setEnrolments(data);
        console.log("This is the data", data);
      });
  }, []);

  const [techJobs, setTechJobs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}coders/techjobs/`)
      .then((results) => {
        console.log("This is the no. of tech jobs", results);
        return results.json();
      })
      .then((data) => {
        setTechJobs(data);
        console.log("This is the data", data);
      });
  }, []);

  const [partnerJobs, setPartnerJobs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}coders/partnerjobs/`)
      .then((results) => {
        console.log("This is the no. of partner jobs", results);
        return results.json();
      })
      .then((data) => {
        setPartnerJobs(data);
        console.log("This is the data", data);
      });
  }, []);

  return (
    <div class="counter">
      <div
        class="impact-circle"
        onclick="location.href='https://shecodes.com.au/partner-with-us/"
      >
        <Link to="/impact#enrolments">
          <div class="circle">
            {enrolments.Enrolled && (
              <div class="number">
                <CountUpAnimation>
                  {4000 + enrolments.Enrolled}
                </CountUpAnimation>
              </div>
            )}
          </div>
        </Link>
        <div class="impact-label">
          <h3>Women taught</h3>
          <Link to="/impact#enrolments">find out more</Link>
        </div>
      </div>
      <div class="impact-circle">
      <Link to="/impact#techpursuedrole">
        <div class="circle">
          {techJobs.TechJobs && (
            <div class="number">
              <CountUpAnimation>{200 + techJobs.TechJobs}</CountUpAnimation>
            </div>
          )}
        </div>
        </Link>
        <div class="impact-label">
          <h3>Pursued tech careers</h3>
          <a href="impact/#techpursuedrole">find out more</a>
        </div>
      </div>
      <div class="impact-circle">
      <Link to="/impact#placements">
        <div class="circle">
          {partnerJobs.PartnersJobs && (
            <div class="number">
              <CountUpAnimation>
                {100 + partnerJobs.PartnersJobs}
              </CountUpAnimation>
            </div>
          )}
        </div>
        </Link>
        <div class="impact-label">
          <h3>Direct hires with partners</h3>
          <a href="impact/#placements">find out more</a>
        </div>
      </div>
    </div>
  );
}

export default ImpactCounter;
