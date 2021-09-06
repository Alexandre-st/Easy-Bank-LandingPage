import React, { useState } from 'react';

// == IMPORT IMAGES
import logo from '../assets/images/logo.svg';
import hamburger from '../assets/images/icon-hamburger.svg';
import closeMenu from '../assets/images/icon-close.svg';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    if (menu === false) {
      setMenu(true);
    } else {
      setMenu(false);
    };
  };

  return ( 
    <header>
      <div className="navigation">
      <div className="navigation-logo">
        <a href="/">
          <img src={logo} alt="EasyBank"></img>
        </a>
      </div>
        <nav className="navigation-desktop">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Carrers</li>
          </ul>
        </nav>

        <div className="navigation-button">
          <a href="/" className="button">Request Invite</a>
        </div>

        {/* / == MENU == / */}
        <div className="navigation-menu" onClick={handleClick}>
          {!menu && 
            <div>
              <img className="navigation-toggle" src={hamburger} alt="Open for navigation" />
            </div>
          }
          {menu &&
          <div>
            <img className="navigation-toggle" src={closeMenu} alt="Close the navigation" />
            <div className="navigation-background">
              <nav className="navigation-mobile">
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Blog</li>
                  <li>Carrers</li>
                </ul>
              </nav>
            </div>
          </div>
          }
        </div>
      </div>
    </header>
  );
}
 
export default Header;