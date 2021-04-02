import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="Navbar">
            <div className="Navbar__logo">
                <img src="./images/logo.svg" alt="Logo"/>
            </div>

            <div className="Navbar__hamburguer">
                <img src="./images/icon-hamburger.svg" alt=""/>
            </div>
        </nav>
    )
}
