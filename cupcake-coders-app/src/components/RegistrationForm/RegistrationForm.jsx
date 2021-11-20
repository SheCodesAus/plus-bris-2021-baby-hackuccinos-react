import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationForm.css";

function RegistrationForm () {

    const [coderData, setCoderData] = useState({});
    // const history = useHistory();

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
    }

    return (
        <form>
            <div class="label">
            <label htmlFor="student_id">Student ID:</label>
            <input 
                // onChange={handleChange}
                type="text"
                id="student_id"
                placeholder="Your secret Cupcake Coder Code."
                value={coderData.student_id}
            /></div>
            <div class="label">
                <label htmlFor="image">Enter URL for dare image:</label>
                <input
                // onChange={handleChange}
                type="url"
                id="image"
                placeholder="Enter URL for image"
                value={coderData.image}
                />
            </div>
            <div class="label">
                <label htmlFor="date_for_dare">What date?</label>
                <input
                // onChange={handleChange}
                type="date"
                id="date_for_dare"
                placeholder="When will you complete your dare?"
                value={coderData.date_for_dare}
                />
            </div>
            <div class="label">
                <label htmlFor="for_charity">Which charity will your dare support?</label>
                <input
                // onChange={handleChange}
                type="text"
                id="for_charity"
                placeholder="What's the name of the charity you are supporting?"
                value={coderData.for_charity}
                />
            </div>
            <div class="label">
                <label htmlFor="charity_url">URL for charity website?</label>
                <input
                // onChange={handleChange}
                type="url"
                id="charity_url"
                placeholder="Enter the URL for your charities website."
                value={coderData.charity_url}
                />
            </div>
            <button type="submit">
            Bake my Cupcake!
            </button>
        </form>
);
}

export default RegistrationForm