import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubHeader from "../components/SubHeader";
import AboutInfo from "../components/AboutInfo";
import ProfilePic from "../components/ProfilePic";
import AboutTech from "../components/AboutTech";
import { Button } from "reactstrap";


const AboutMe = () => {

    function techButton(){
        let elements = document.getElementById('tech');
        elements.classList.toggle('hideTech');

    }
    return (
        <div className='aboutMeParent'>
            <Header />
            <div className="aboutMeStyles">
                <AboutInfo  />
            </div>
            <div className="aboutTechCard" id='tech'>
                <AboutTech />
            </div>
        </div>
    )
}

export default AboutMe;