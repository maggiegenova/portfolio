import React from 'react';
import profileImage from '../app/images/profile-image.png';

function ProfilePicture() {
  return (
    <img className='PortfolioPicture' src={profileImage.src} alt="Profile"/>
    );
}

export default ProfilePicture;

