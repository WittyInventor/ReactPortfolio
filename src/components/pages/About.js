// html in here , css goes in the app.css

import React from 'react';
import Mypicture from '../../Assets/ProME.jpg';

function About() {
    return (
        <div className="contactMainContainer">
        
            <h4>About Me</h4>
            <img src={Mypicture} />

            <p>Greetings fellow educators in STEM!
After working more than 10 years in education including teaching overseas, I have transitioned into educating in the STEM world. I am an enthusiastic STEM instructor with a recent history as a PLTW Master App Creator Teacher for 2 years and a PLTW Design & Modeling this school year. Many parents want their children to learn code based research, so to further enhance my skills I am completing an intense coding  program through the University of Arizona and planning on becoming a VEX certified educator this year. 
            </p>

    

        
        
        </div>
    );
}

export default About;

