import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SubmitForm.css";
import { Link } from "react-router-dom";

function RegistrationForm () {

    const [coderData, setCoderData] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        let { id, value } = e.target;
        setCoderData((prevCoderData) => ({
            ...prevCoderData,
            [id]: value, 
        }));

    };


    const handleSubmit = async (e) => {
        e.preventDefault()


        const response = await fetch(
            `${process.env.REACT_APP_API_URL}coders/`, 
            {
            method: "post",
            headers: {
                "Authorization": `Token ${localStorage.getItem('token')}`,
                "Content-type": "application/json",
            },
            body: JSON.stringify(coderData),
            }
        );

        console.log("Found response: ", response)
    	if (response.status==404) {
      		navigate("/errorpage")
    	};
    	return response.json();
        
    }

    return (
        <form>
            <h2 class="form_h2">Your Cupcake Recipe</h2>
            <div class="label">
                <label htmlFor="image">Let's start with a lovely photo of yourself.</label>
                <input
                onChange={handleChange}
                type="url"
                id="image"
                placeholder="Please enter URL for your headshot image."
                value={coderData.image}
                />
            </div>
            <div class="label">
                <label htmlFor="current_role">What's your current role?</label>
                <input
                onChange={handleChange}
                type="text"
                id="current_role"
                placeholder="Cupcake Coder and..."
                value={coderData.current_role}
                />
            </div>
            <div class="label">
                <label htmlFor="tech_industry">You're in the tech industry True or False?</label>
                <input
                onChange={handleChange}
                type="boolean"
                id="tech_industry"
                placeholder="Please write True or False"
                value={coderData.tech_industry}
                />
            </div>
            <div class="label">
                <label htmlFor="programs_complete">Which of our She Codes programs have you completed?</label>
                <input
                onChange={handleChange}
                type="text"
                id="programs_complete"
                placeholder="Eg. Plus Brisbane Cohort"
                value={coderData.programs_complete}
                />
            </div>
            <div class="label">
                <label htmlFor="programs_interested">Any She Codes programs you are interested in?</label>
                <input
                onChange={handleChange}
                type="text"
                id="programs_interested"
                placeholder="Eg. Plus Brisbane Cohort"
                value={coderData.programs_interested}
                />
            </div>
            <div class="label">
                <label htmlFor="location">Where are you located?</label>
                <input
                onChange={handleChange}
                type="text"
                id="location"
                placeholder="Eg. Brisbane, Perth, Sydney?"
                value={coderData.location}
                />
            </div>
            <div class="label">
                <label htmlFor="mentoring">Are you a current mentor? Or interested in mentoring?</label>
                <input
                onChange={handleChange}
                type="text"
                id="mentoring"
                placeholder="Current mentor. OR I'm interested!"
                value={coderData.mentoring}
                />
            </div>
            <div class="label">
                <label htmlFor="partner_hire">Have you secured a position with a program partner? If yes, who did you join?</label>
                <input
                onChange={handleChange}
                type="text"
                id="partner_hire"
                placeholder="Landed a role with BHP!"
                value={coderData.partner_hire}
                />
            </div>
            <div class="label">
                <label htmlFor="post_study">Endeavoured with further study in the tech field? True or False?</label>
                <input
                onChange={handleChange}
                type="text"
                id="post_study"
                placeholder="Please write True or False"
                value={coderData.post_study}
                />
            </div>
            <div className="button-centre">
            <button onClick={handleSubmit} type="submit">
            Bake my Cupcake!
            </button>
            </div>
            <div>
                <Link to="/success">Success test</Link>
            </div>
        </form>
);
}

export default RegistrationForm