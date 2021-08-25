import React from 'react';

const Description = () => {
  
  const Article = (props) => {
    return (
      <div className="description-content-article">
        {/* <img src={props.image} alt="logo" /> */}
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    );
  };

  return (
    <section className="description">
      <div className="container">
        <div className="description-header">
          <h2>Why choose EasyBank?</h2>
          <p>
            We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="description-content">
          <Article 
            // image=""
            title="Online Banking"
            text="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
         />
          <Article 
            // image=""
            title="Simple Budgeting"
            text="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
          />
          <Article 
            image=""
            title="Fast Onboarding"
            text="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
          />
          <Article 
            image=""
            title="Open API"
            text="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
          />
        </div>
      </div>
    </section>
  );
}
 
export default Description;