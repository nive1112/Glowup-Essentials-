import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img id="logo" src={assets.GLOWUPlogo} alt=""/>
                <p id="foot">Makeup is more than just a routine; it’s an art form that allows individuals to express their unique personalities and moods. From the bold strokes of a vibrant lip color to the delicate shimmer of a perfectly blended eyeshadow, each application is a chance to transform and enhance one’s natural beauty.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook} alt="" />
                <img src={assets.threads} alt="" />
                <img src={assets.instagram} alt="" />
            </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-234-567-890</li>
                    <li>contact@glowup.com</li>
                </ul>
</div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 © Glowup Essentials.com - All Right Reserved.</p>
      
    </div>
  )
}

export default Footer
