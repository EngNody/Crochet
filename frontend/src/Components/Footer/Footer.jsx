import React from 'react';
import './Footer.css'
import footer_logo from '../Assets/Noda_Crochet_5.jpg'
import instagram_icon from '../Assets/instgram-logo.jpg'
import pintester_icon from '../Assets/pinterest_PNG63.png'
import whatsapp_icon from '../Assets/whatsapp.jpg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_logo">
        <img src={footer_logo} alt="" />
        <h1>Noda Crochet</h1>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
