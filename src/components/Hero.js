import React from 'react';
import TitleDesc from './TitleDesc';
import Button from './Button';

import './Hero.css';

export default function Hero() {
    return (
        <header className='Hero'>
            <img className='Hero__image' src='./images/image-intro-mobile.jpg' alt='Hero image'/>
            <div className="Hero__text">
                <img src="./images/bg-pattern-intro-left-mobile.svg" alt="" className="decorationLeft"/>
                <img src="./images/bg-pattern-intro-right-mobile.svg" alt="" className="decorationRight"/>
                <TitleDesc title='Humanizing your insurance.'>
                    Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.
                </TitleDesc>
                <Button  size='btn--small'>VIEW PLANS</Button>
            </div>
        </header>
    )
}
