import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import facebook_logo from "../../components/static file/facebook_logo.png";
import twitter_logo from "../../components/static file/twitter_logo.png";
import instagram_logo from "../../components/static file/instagram_logo.png";
import linkedin_logo from "../../components/static file/linkedin_logo.png";

function Footer() {

    return (
        <div class="footer">
            <div class="socials">
                <h4 class="footer-h4"> Let's get social! </h4>
                <i href="https://www.facebook.com/shecodesaustralia"><img class="logomedia" src={facebook_logo} alt="facebook_logo" /></i>
                <a href="https://twitter.com/she_codes"><img class="logomedia" src={twitter_logo} alt="twitter_logo" /></a>
                <a href="https://www.instagram.com/shecodesaus"><img class="logomedia" src={instagram_logo} alt="instagram_logo" /></a>
                <a href="https://www.linkedin.com/company/shecodesaustralia"><img class="logomedia" src={linkedin_logo} alt="linkedin_logo" /></a>
            </div>
            <div>
                <a href="/">Built by Baby Hackuccinos ©2021</a>
            </div>
        </div>
    );
}

export default Footer;