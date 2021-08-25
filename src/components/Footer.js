import React from 'react';

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-social">
          <img alt="Logo easybank" />
          <div className="footer-social-logo">
            <img alt="Facebook" />
            <img alt="Youtube" />
            <img alt="Twitter" />
            <img alt="Pinterest" />
            <img alt="Intagram" />
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
      </div>
    </section>
  );
}
 
export default Footer;
