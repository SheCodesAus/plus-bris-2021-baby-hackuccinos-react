import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactForm.css";

function ContactForm () {    
    return (
        <form action="https://formspree.io/f/xzbopgjl" method="post">
             <div class="label">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Name"/>
                    </div>
                    <div class="label">
                        <label for="mail">Email</label>
                        <input type="email" id="mail" name="email" placeholder="Email"/>
                    </div>
                    <div class="label">
                        <label for="Phone">Phone Number</label>
                        <input type="text" id="phone" name="phone" placeholder="Phone"/>
                    </div>
                    <div class="label">
                        <label for="message">Message</label>
                        <input id="message" name="message" placeholder="Message"></input>
                    </div>
                    <div class="label">
                        <button type="submit">Send</button>
                    </div>

                    <div class="label">
                        <input type="checkbox" id="checkboxInput"/>
                        <label for="checkboxInput">Tick the box if you want to subscribe our newsletter</label>
                    </div>

        </form>
);
}

export default ContactForm