import React from 'react';
import Button from './Button';
import './Menu.css';


export default function Menu() {
    return (
        <ul className='Menu' style={
            {backgroundImage:'url(./images/bg-pattern-mobile-nav.svg)'}
            }>
            <li className="Menu__link">How we work</li>
            <li className="Menu__link">Blog</li>
            <li className="Menu__link">Account</li>
            <li className="Menu__link"><Button>View plans</Button></li>
        </ul>
    )
}
