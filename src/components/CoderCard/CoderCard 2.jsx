import React from "react";
import "./CoderCard.css";
import { allCoders } from "../../data.js";

function CoderCard(props) {
    const { coderData } = props;
    console.log(allCoders)

    const testCoder = allCoders[0]
    console.log(testCoder)

    return (
        // <div class="coder-card">
        //     <Link to={`/coders/${coderData.id}`}>
        //         <div class="card">
        //             <img class="clip-me" src={coderData.image }/>
        //             <div class="centered">{coderData.first_name}{coderData.last_name}</div>
        //         </div>
        //     </Link>
        <div className="cupcake-container">
            <div class="cupcake">
                <img class="clip-me" src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/free-hugs-day.png" alt="Description of image"/>
                <div class="badge-row">
                    {
                        testCoder.student_id
                            ? testCoder.programs_complete
                                ? <img class="badge" src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/Untitled%20design%20(31).png" alt="Further She Codes learning"/>
                                : <img class="badge" src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/Untitled%20design%20(30).png" alt="Enrolled badge"/>
                            : <></> 
                    }
                    {
                        testCoder.tech_industry &&
                        <img class="badge" src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/Untitled%20design%20(28).png" alt="Joined tech industry"/>
                    }
                    {
                        testCoder.partner_hire &&
                        <img class="badge" src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/Untitled%20design%20(24).png" alt="Further learning badge"/>
                    }
                    {
                        testCoder.post_study &&
                        <img class="badge" src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/Untitled%20design%20(23).png" alt="Further study badge"/>
                    }
                    {
                        testCoder.mentoring &&
                        <img class="badge" src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/mentor-badge.png" alt="Mentoring badge"/>
                    }
                </div>
            </div>
            <img class="clip-me" src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/blue-headshot.png" alt="Description of image"/>
            <img class="clip-me" src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/pink-headshot.png" alt="Description of image"/>
            <img class="clip-me" src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/purple-headshot.png" alt="Description of image"/>
        </div>
    
 )   
}

export default CoderCard