import React from 'react';
import Adresse from './Adresse';
import FullName from './FullName';
import ProfilePhoto from './ProfilePhoto';

const Profile = () => {
    return (
        <>
        <div className='Profile'>
          <ProfilePhoto/>
          <FullName/>
          <Adresse/>  
        </div>
        </>
    );
};

export default Profile;