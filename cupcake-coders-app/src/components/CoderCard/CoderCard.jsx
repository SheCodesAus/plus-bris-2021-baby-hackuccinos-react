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
            {/* <div class="card">
                <div class="card__avatar">
                <svg role="none" style="height:120px; width:120px">
                    <mask id="image">
                        <img src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/Untitled%20design%20(23).png"/>
                    </mask>
                    <g mask="url(#circle)">
                    <image
                        x="0"
                        y="0"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                        width="100%"
                        xlink:href="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                        style="height: 120px; width: 120px"
                    ></image>
                    <circle class="border" cx="60" cy="60" r="60"></circle>
                    </g>
                </svg>
                <div class="badge"></div> */}
            <img class="clip-me" src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/free-hugs-day.png" alt="Description of image"/>
            <img class="clip-me" src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/blue-headshot.png" alt="Description of image"/>
            <img class="clip-me" src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/pink-headshot.png" alt="Description of image"/>
            <img class="clip-me" src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/purple-headshot.png" alt="Description of image"/>
        </div>
    
 )   
}

export default CoderCard