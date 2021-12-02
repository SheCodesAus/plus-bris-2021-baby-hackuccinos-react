import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import CoderCard from "../../components/CoderCard/CoderCard";


function CodersPage() {
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
            <div className="home-div">
                <div className="intro">
                    <h1>Cupcake coders unite!</h1>
                    <h2>Say hello to all of our wonderful cupcake coders!</h2>
                    <p>These are the faces of the future of tech. Women who code 
                        and are forging new pathways for themselves and the tech community at large.
                        Check out their badges to discover their incredible feats!</p>
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
                <div id="coders-list">
                {codersList.map((CoderData, key) => {
                return <CoderCard key={key} coderData={CoderData} />;
                })}
                </div>
            </div>
    );
}

    


export default CodersPage;