import React from 'react'
import Feature from './Feature'

import './Features.css'


export default function Features() {
    return (
        <div className='Features'>
            <hr/>
            <h2 className='Features__title'>We're different</h2>
            <Feature iconName='icon-snappy-process' title='Snappy Process'>
                Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.
            </Feature>
            <Feature iconName='icon-affordable-prices' title='Affordable Prices'>
                We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.
            </Feature>
            <Feature iconName='icon-people-first' title='People First'>
                Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.
            </Feature>
        </div>
    )
}
