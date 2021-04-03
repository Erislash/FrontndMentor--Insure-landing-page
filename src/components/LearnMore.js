import React from 'react'
import Button from './Button'

import './LearnMore.css'

export default function LearnMore() {
    return (
        <div className='LearnMore'>
            <img src='./images/bg-pattern-how-we-work-mobile.svg' alt="" className="decoration"/>
            <h2 className='LearnMore__text'>Find out more about how we work</h2>
            <Button size='btn--small'>How we work</Button>
        </div>
    )
}
