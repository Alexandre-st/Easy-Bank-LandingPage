import React from 'react';

// == IMPORT IMAGES
import logo from '../assets/images/white_logo.svg';
import facebook from '../assets/images/icon-facebook.svg';
import youtube from '../assets/images/icon-youtube.svg';
import twitter from '../assets/images/icon-twitter.svg';
import pinterest from '../assets/images/icon-pinterest.svg';
import instagram from '../assets/images/icon-instagram.svg';

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-social">
        <img className="footer-social-logo" src={logo} alt="Logo easybank"  />
        <div className="footer-social-link">
          <img alt="Facebook" src={facebook} />
          <img alt="Youtube" src={youtube} />
          <img alt="Twitter" src={twitter} />
          <img alt="Pinterest" src={pinterest} />
          <img alt="Intagram" src={instagram} />
        </div>
      </div>
      <div className="footer-link">
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
        <ul>
          <li>Careers</li>
          <li>Support</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-copyright">
        <a href="/" className="button">Request Invite</a>
        <p>© Easybank. All Rights Reserved</p>
      </div>
    </section>
  );
}
 
export default Footer;
