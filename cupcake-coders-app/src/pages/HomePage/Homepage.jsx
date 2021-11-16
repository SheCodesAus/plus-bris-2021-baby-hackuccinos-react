import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import ImpactCounter from "../../components/ImpactCounter/ImpactCounter";
import "./HomePage.css";

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
            </div>
        </div>
    )
}

export default HomePage;