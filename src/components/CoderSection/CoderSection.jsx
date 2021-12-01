import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CoderCard from "../CoderCard/CoderCard";
import "./CoderSection.css";

function CoderSection () {
    const [codersList, setCodersList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}coders/`)
        .then((results) => {
            console.log("This is the results", results)
        return results.json();
        })
        .then ((data) => {
            setCodersList(data);
        });
    },[]);

    return (
    <div class="coder-section-main-div">
        <div class="coder-section-centered-h1">
            <h1>Meet our Cupcake Coder tribe</h1>
        </div>
        <div class="coder-section-h3">
            <h3>These incredible coders have achieved so much,
                whether that be simply new skills or a brand new career 
                in tech! Check out the badges to discover their incredible
                feats!
            </h3>
        </div>
        <div class="legend">
            <img src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/Untitled%20design%20(30).png" alt="Enrolled badge"></img>
            <p>Enrolled</p>
            <img src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/Untitled%20design%20(28).png" alt="Joined tech industry"></img>
            <p>Tech Career</p>
            <img src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/Untitled%20design%20(24).png" alt="Further learning badge"></img>
            <p>Direct Hire</p>
            <img src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/Untitled%20design%20(23).png" alt="Further study badge"></img>
            <p>Further study in tech</p>
            <img src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/mentor-badge.png" alt="Mentoring badge"></img>
            <p>Mentor</p>
        </div>
        <div id="coders">
            {codersList.map((CoderData, key) => {
                if(key > 3){
                    return;
                }
                return <CoderCard key={key} coderData={CoderData} />;
            })}
        </div>
        <div id="coder-section-button">
            <a href="/coders"><button class="coder-section-button">Meet the whole gang</button></a>
        </div>
    </div>
    )

}

export default CoderSection