import React from "react";
import { Link } from "react-router-dom";
import "./CoderCard.css";

function CoderCard(props) {
    const { coderData } = props;
    return (
        // <div class="coder-card">
        //     <Link to={`/coders/${coderData.id}`}>
        //         <div class="card">
        //             <img class="clip-me" src={coderData.image }/>
        //             <div class="centered">{coderData.first_name}{coderData.last_name}</div>
        //         </div>
        //     </Link>
        <div>
            <img class="clip-me" src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/free-hugs-day.png" alt="Description of image"/>
            <img class="clip-me" src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/free-hugs-day.png" alt="Description of image"/>
        </div>
    
 )   
}

export default CoderCard