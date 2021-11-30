import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactForm.css";

function ContactForm () {

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
    }

    return (
        <contact>
            

            <div class="label">
                <label htmlFor="name">Name</label>
                <input
                type="text"
                placeholder="Name"
                />
            </div>
            <div class="label">
                <label htmlFor="Email address">Email address</label>
                <input
                type="text"
                placeholder="Email"
                />
            </div>
            <div class="label">
                <label htmlFor="Phone Number">Phone Number</label>
                <input
                type="text"
                placeholder="Phone"
                />
            </div>
            
            <div class="label">
                <label htmlFor="Message">Message</label>
                <input
                onChange={handleChange}
                placeholder="Message"
                />
            </div>
            
            <div className="button-centre">
            <button onClick={handleSubmit} type="submit">
            Order submitted!
            </button>
            </div>
            
        </contact>

        
);
}

export default ContactForm