import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const CoderInfoPage = () => {
    const [coderData, setCoderData] = useState();
    const [isEditing, setIsEditing] = useState(false);
    const { id: coder_id } = useParams();
    console.log (coder_id)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}coders/${coder_id}/`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setCoderData(data);
        });
        
    }, [coder_id]);
    
    const handleChange = (event) => {
        const { id, value } = event.target
        setCoderData({
            ...coderData,
            [id]: value
        })
    }

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const response = await fetch(`
        ${process.env.REACT_APP_API_URL}coders/${coder_id}/`, 
        {
        method: "put",
        headers: {
            "Authorization": `Token ${localStorage.getItem('token')}`,
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify({
            id: coderData.id,
            date_created: coderData.date_created, 
            image: coderData.image,
            current_role: coderData.current_role,
            tech_industry: coderData.tech_industry,
            programs_complete: coderData.programs_complete,
            programs_interested: coderData.programs_interested,
            location: coderData.location,
            mentoring: coderData.mentoring,
            partner_hire: coderData.partner_hire,
            post_study: coderData.post_study, 
        }
        ),
    }
    );

    setIsEditing(false)
}

    const deleteCoder = async () => {
        await fetch(`${process.env.REACT_APP_API_URL}coders/${coder_id}`, {
            method: "delete",
            headers: {
            "Authorization": `Token ${localStorage.getItem('token')}`
            }
        })
        // Once we delete the project above, we then want to navigate back to the homepage
        // since the project we are looking at, doesn't exist anymore
        history.push('/')
    }
    
    const ReadCoder = () => {
        return (
            <div className="coder-info">
                <div className="coder">
                    <h2>Welcome to profile of coder ${coderData.id}</h2>
                    <img src={coderData.image} />
                </div>
            </div>
        )
    }   

    return (
        <div class="coder-page">
            <img src={coderData.image } />
                { 
                    localStorage.getItem("token") 
                    && isEditing == false
                    && <button onClick={() => setIsEditing(true)}>Edit Profile</button> 
                }
                {
                    localStorage.getItem('token')
                    && <button onClick={deleteCoder}>Delete Profile</button>
                }
        </div>
    );
}

export default DarePage
