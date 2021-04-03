import React from 'react'

import './Button.css'

export default function Button({children, color, size}) {
    return <button className={`btn ${color} ${size}`}>{children}</button>
}