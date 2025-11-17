import React from 'react';
import pageNotFoundIcon from '../app/images/page-not-found.svg';

function PageNotFound() {
  return (
    <img className='placeholderImageSize' src={pageNotFoundIcon.src} alt="Page not found"/>
    );
}

export default PageNotFound;

