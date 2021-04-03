import React from 'react'

import './FooterLinkSet.css'

export default function FooterLinkSet({children, header, }) {
    return (
        <ul className='FooterLinkSet'>
            <h3 className="FooterLinkSet__header">{header}</h3>
            {children}
        </ul>
    )
}
