import React from 'react';
import TitleDesc from './TitleDesc';
import Button from './Button';

import './Hero.css';

export default function Hero() {
    return (
        <header className='Hero'>
            <TitleDesc title='Humanizing your insurance.'>
                Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.
            </TitleDesc>
            <Button color='btn--dark' size='btn--medium'>VIEW PLANS</Button>
        </header>
    )
}
