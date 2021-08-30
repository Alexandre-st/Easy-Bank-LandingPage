import React from 'react';

// == IMPORT
import phones from '../assets/images/image-mockups.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={phones} alt="Background Phone" />
      </div>
      <div className="hero-content">
        <h1 className="hero-content-title">Next generation digital banking</h1>
        <p className="text">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <a href="/" className="button">Request Invite</a>
      </div>
    </section>
  );
};
 
export default Hero;
