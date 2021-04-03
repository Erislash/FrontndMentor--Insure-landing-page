import React from 'react'

import FooterLinkSet from "./FooterLinkSet";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className='Footer'>
            <img src="./images/bg-pattern-footer-mobile.svg" alt="" className="Footer__decoration"/>
            <div className="Footer__logo">
                <img className="Footer__logoImg" src="./images/logo.svg" alt="Logo"/>
                <div className="Footer__social">
                    <a href="#"><img src="./images/icon-facebook.svg" alt="Social Media"/></a>
                    <a href="#"><img src="./images/icon-twitter.svg" alt="Social Media"/></a>
                    <a href="#"><img src="./images/icon-pinterest.svg" alt="Social Media"/></a>
                    <a href="#"><img src="./images/icon-instagram.svg" alt="Social Media"/></a>
                </div>
            </div>
            <hr/>
            <FooterLinkSet header='Our company'>
                <li><a href="#">How we work</a></li>
                <li><a href="#">Why Insure?</a></li>
                <li><a href="#">View plans</a></li>
                <li><a href="#">Reviews</a></li>
            </FooterLinkSet>

            <FooterLinkSet header='Help me'>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Terms of use</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Cookies</a></li>
            </FooterLinkSet>

            <FooterLinkSet header='Contact'>
                <li><a href="#">Sales</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Live chat</a></li>
            </FooterLinkSet>

            <FooterLinkSet header='Others'>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Licenses</a></li>
            </FooterLinkSet>
        </footer>
    )
}
