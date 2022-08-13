import React from "react";
import MyPic from '../img/hughnew.jpeg';


const ProfilePic = () => {
    return (
        <div className="profilePicContainer">
            <img className='profilePic' src={MyPic} alt="profile pic" />

        </div>
    )
}

export default ProfilePic;

export const Clock = require('../img/clock.jpg');
export const Flight = require('../img/flight.jpg');
export const Hand = require('../img/hand.jpg');
export const Pexels = require('../img/pexels.jpg');
export const Pineapple = require('../img/pineapple.jpg');
export const Umbrella = require('../img/umbrella.jpg');