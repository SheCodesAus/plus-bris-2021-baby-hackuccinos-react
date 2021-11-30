import React, { useEffect, useHistory, useState }  from "react";
import ContactForm from '../../components/ContactForm/ContactForm';
import facebook_logo from "../../components/static file/facebook_logo.png";
import twitter_logo from "../../components/static file/twitter_logo.png";
import instagram_logo from "../../components/static file/instagram_logo.png";
import linkedin_logo from "../../components/static file/linkedin_logo.png";

function ContactPage()  {
    return (
    <form action="https://formspree.io/f/mknkblol" method="post">
        <div class="contactpage">        
            <div>
                <a href="https://www.facebook.com/shecodesaustralia"><img class="logomedia" src={facebook_logo} alt="facebook_logo" /></a>
                <a href="https://twitter.com/she_codes"><img class="logomedia" src={twitter_logo} alt="twitter_logo" /></a>
                <a href="https://www.instagram.com/shecodesaus"><img class="logomedia" src={instagram_logo} alt="instagram_logo" /></a>
                <a href="https://www.linkedin.com/company/shecodesaustralia"><img class="logomedia" src={linkedin_logo} alt="linkedin_logo" /></a>
            
            </div>
        
            <h1>Contact Us</h1>
            <p>Do you want to order our secret recipe? Please contact us and we would love to share it</p>
        
        <ContactForm />
        
    </div>
    </form>
   )

}





export default ContactPage;









