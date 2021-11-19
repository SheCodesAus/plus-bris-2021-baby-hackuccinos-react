import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import CoderCard from "../../components/CoderCard/CoderCard";
import "./CodersPage.css";


function CodersPage() {
//     const [coderList, setCoderList] = useState([]);

//     useEffect(() => {
//         fetch(`${process.env.REACT_APP_API_URL}coders`)
//         .then((results) => {
//         return results.json();
//         })
//         .then ((data) => {
//             setCoderList(data);
//         });
//     },[]);

//     return (
//     <div id="coders-list"
//     {coderList.map((CoderData, key) => {
//     return <CoderCard key={key} coderData={CoderData} />;
//     })}
//     </div>
//     );
return <h1>This is the coders page.</h1>
}

    


export default CodersPage;