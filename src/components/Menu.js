import React, {useState} from 'react';
import Button from './Button';
import './Menu.css';


export default function Menu({menuActive}) {
    return (
        <ul className={`Menu ${menuActive ? 'active' : ''}`} style={
            {backgroundImage:'url(./images/bg-pattern-mobile-nav.svg)'}
            }>
            <li className="Menu__link">How we work</li>
            <li className="Menu__link">Blog</li>
            <li className="Menu__link">Account</li>
            <li className="Menu__link"><Button>View plans</Button></li>
        </ul>
    )
}
