import React from 'react';
import pageLockedIcon from '../app/images/page-locked.svg';

function PageLocked() {
  return (
    <img className='placeholderImageSize' src={pageLockedIcon.src} alt="Page locked"/>
    );
}

export default PageLocked;

