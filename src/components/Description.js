import React from 'react';

// == IMPORT IMAGES 
import banking from "../assets/images/icon-online.svg";
import budgeting from "../assets/images/icon-budgeting.svg";
import onboarding from "../assets/images/icon-onboarding.svg";
import api from "../assets/images/icon-api.svg";

const Description = () => {
  
  const Article = (props) => {
    return (
      <div className="description-content-article">
        <img className="description-content-article-image" src={props.image} alt="logo" />
        <h3>{props.title}</h3>
        <p className="text">{props.text}</p>
      </div>
    );
  };

  return (
    <section className="description">
      <div className="description-header">
        <h2>Why choose EasyBank?</h2>
        <p className="text">
          We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
        </p>
      </div>
      <div className="description-content">
        <div className="description-content-grid1">
          <Article 
            image={banking}
            title="Online Banking"
            text="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
          />
          <Article 
            image={budgeting}
            title="Simple Budgeting"
            text="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
          />
        </div>
        <div className="description-content-grid2">
          <Article 
            image={onboarding}
            title="Fast Onboarding"
            text="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
          />
          <Article 
            image={api}
            title="Open API"
            text="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
          />
        </div>
      </div>
    </section>
  );
}
 
export default Description;