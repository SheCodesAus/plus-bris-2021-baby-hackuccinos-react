import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ImpactCounter.css";

function ImpactCounter () {
    
    const easeOutQuad = t => t * ( 2 - t );
    const frameDuration = 1000 / 60;

    const CountUpAnimation = ( { children, duration = 2000 } ) => {
	const countTo = parseInt( children, 10 );
	const [ count, setCount ] = useState( 100 );

	useEffect( () => {
		let frame = 0;
		const totalFrames = Math.round( duration / frameDuration );
		const counter = setInterval( () => {
			frame++;
			const progress = easeOutQuad( frame / totalFrames );
			setCount( countTo * progress );

			if ( frame === totalFrames ) {
				clearInterval( counter );
			}
		}, frameDuration );
	}, [] );

	return Math.floor( count );
    };
    
    return (
        <div class='counter'>
            <div class="impact-circle" onclick="location.href='https://shecodes.com.au/partner-with-us/">
                <div class="circle">
                    <div class="number">
                        <CountUpAnimation>4065</CountUpAnimation>
                    </div>
                </div>
                <div class="impact-label">
                    <h3>Women taught</h3>
                    <a href="#enrolments">find out more</a>
                </div>
            </div>
            <div class="impact-circle">
                <div class="circle">
                    <div class="number">
                        <CountUpAnimation>290</CountUpAnimation>
                    </div>
                </div>
                <div class="impact-label">
                    <h3>Pursued tech careers</h3>
                    <a href="#techpursuedrole">find out more</a>
                </div>
            </div>
            <div class="impact-circle">
                <div class="circle">
                    <div class="number">
                        <CountUpAnimation>128</CountUpAnimation>
                    </div>
                </div>
                <div class="impact-label">
                    <h3>Direct hires with partners</h3>
                    <a href="#placements">find out more</a>
                </div>
            </div>
        </div>
    )
}

export default ImpactCounter