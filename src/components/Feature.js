import React from 'react'
import TitleDesc from './TitleDesc';

import './Feature.css'

export default function Feature({iconName, children, title}) {
    return (
        <div className='Feature'>
            <img className='Feature__icon' src={`./images/${iconName}.svg`} alt={`Feature - ${title}`}/>
            <TitleDesc type='feature' title={title}> {children} </TitleDesc>
        </div>
    )
}
