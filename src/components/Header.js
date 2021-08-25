import React from 'react';

const Header = () => {
  return ( 
    <header>
      <div className="container">
        <a href="/"><img alt="EasyBank"></img></a>
        <nav className="navigation desktop">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Carrers</li>
          </ul>
          <a href="/" className="button">Request Invite</a>
        </nav>
      </div>
    </header>
  );
}
 
export default Header;