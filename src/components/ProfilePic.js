import React from "react";
import MyPic from '../img/IMG_8031.PNG';

const ProfilePic = () => {
    return (
        <div>
            <img className='profilePic' src={MyPic} alt="profile pic" />

        </div>
    )
}

export default ProfilePic;