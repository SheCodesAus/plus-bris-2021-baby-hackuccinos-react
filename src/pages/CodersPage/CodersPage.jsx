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
        <div id="coders-list">
        {codersList.map((CoderData, key) => {
        return <CoderCard key={key} coderData={CoderData} />;
        })}
        </div>
    );
}

    


export default CodersPage;