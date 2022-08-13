import React from "react";
import ProfilePic from "./ProfilePic";
import { Button } from "reactstrap";


const AboutInfo = () => {
    return (
        <>
            <ProfilePic />
            <div className="aboutMeName">
                <h1>Hugh Handcox</h1>
            </div>
            <div>
                <h2>a little about me...</h2>
            </div>
            <div className="aboutText mx-auto">
            Residing in Austin, TX with over 10 years experience producing media for television and higher education. This experience has molded me into a creative problem solver with acute attention to detail - and it's these skills I am bringing with me as I become a Full Stack Developer!
            </div>
        </>
    )
}

export default AboutInfo;