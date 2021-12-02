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
                    <p>These are the faces of the future of tech. Women who code and are forging new pathways for themselves and the tech community at large.</p>
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