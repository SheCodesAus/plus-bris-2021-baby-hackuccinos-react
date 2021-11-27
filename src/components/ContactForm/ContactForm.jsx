import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactForm.css";

function ContactForm () {    
    return (
        
        <contact>
            <form action="https://formspree.io/f/mknkblol" method="post"></form>
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
                type="text"
                placeholder="Message"
                />
            </div>
            
            <div className="button-centre">
            <button type="submit">
            Order submitted!
            </button>
            </div>
        </contact>
);
}

export default ContactForm