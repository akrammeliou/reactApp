import React from 'react';
import profilePhoto from './profile_photo.png';
const ProfilePhoto = () => {
    return (
        <div>
            <img className='photoProfile' src={profilePhoto} alt='PhotoProfile'/>
        </div>
    );
};

export default ProfilePhoto;