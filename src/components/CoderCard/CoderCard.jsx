import React from "react";
import "./CoderCard.css";
import { Link } from "react-router-dom";
// import { allCoders } from "../../data.js";

function CoderCard(props) {
    const { coderData } = props;
    console.log(coderData)
    console.log(process.env.REACT_APP_API_URL)
    // console.log(allCoders)

    // const testCoder = allCoders[0]
    // console.log(testCoder)

    return (
        <div>
            <div class="coder-card">
                <Link to={`${process.env.REACT_APP_API_URL}coders/${coderData.id}`}>
                    <div class="card">
                        <img class="clip-me" src={coderData.image}/>
                        <div class="centered">
                            {coderData.first_name}{coderData.last_name}
                        </div>
                        <div class="badge-row">
                        {
                            coderData.student_ID
                                ? <img class="badge" src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/Untitled%20design%20(30).png" alt="Enrolled badge"/>
                                : <></> 
                        }
                        {
                            coderData.tech_industry &&
                            <img class="badge" src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/Untitled%20design%20(28).png" alt="Joined tech industry"/>
                        }
                        {
                            coderData.partner_hire &&
                            <img class="badge" src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/Untitled%20design%20(24).png" alt="Further learning badge"/>
                        }
                        {
                            coderData.post_study &&
                            <img class="badge" src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/Untitled%20design%20(23).png" alt="Further study badge"/>
                        }
                        {
                            coderData.mentoring &&
                            <img class="badge" src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/mentor-badge.png" alt="Mentoring badge"/>
                        }
                    </div>
                    </div>
                </Link>
            </div>
        </div>
 )   
}

export default CoderCard