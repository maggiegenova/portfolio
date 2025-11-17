import React from 'react';
import ovalButtonIcon from '../app/images/oval-button.svg';

function SeeCaseButton() {
  return (
    <div className="container">
        <img src={ovalButtonIcon.src} alt="See more button"/>
        <div className="centered font-semibold">See case</div>


    </div>
    // <span className='items-center justify-items-center'>Open Menu
    // <img src="/oval-button.svg" alt="Blue oval"/></span>
    );
}

export default SeeCaseButton;
