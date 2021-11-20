import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import CoderSection from "../../components/CoderSection/CoderSection";
import Header from "../../components/Header/Header";
import ImpactCounter from "../../components/ImpactCounter/ImpactCounter";
import "./HomePage.css";  
import Footer from "../../components/Footer/Footer";

function HomePage()  {
    return (
        <div>
            <div class='intro'>
                <h1>Hello there,</h1>
                <h2>welcome to the world of our "cupcake coders"</h2>
                <p>This is where we showcase the impact from our
                She Codes programs. We do this through following 
                our tribe of cupcake coders and their progress 
                using their new skills. 
                </p>
            </div>
            <div>
            <ImpactCounter />
            <CoderSection />
            </div>
            <div class="intro">
            <h1>Who we work with,</h1>
                <h2>to make the magic happen for our "cupcake coders"</h2>
                <p>Our events are free thanks to the support of these organisations.
                    Our partners pave the way for our She Codes cupcake Coders 
                    to take on a tech role and begin their new careers.  
                    If you are interested in partnering with She Codes <a href="https://shecodes.com.au/partner-with-us/">find out more here.</a> 
                </p>
                <a href="https://shecodes.com.au/partner-with-us/"><img id="partners" src="https://raw.githubusercontent.com/bel-lloyd/my-files/master/Partners.png"/></a>
            </div>
        </div>
    )
}

export default HomePage;