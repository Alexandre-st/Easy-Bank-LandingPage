import React from 'react';

const Articles = () => {

  const Article = (props) => {
    return (
      <article className="article-content">
        {/* <img src={props.image} alt="Illustration" /> */}
        <p className="article-content-name">{props.name}</p>
        <h4>{props.title}</h4>
        <p className="article-content-text">{props.paragraph}</p>
      </article>
    )
  };

  return (
    <section className="articles">
      <div className="container">
        <h2>Latest Articles</h2>

        <div className="articles article">
          <Article 
            // image=""
            name="By Claire Robinson"
            title="Receive money in any currency with no fees"
            paragraph="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
          />
          <Article 
            // image=""
            name="By Wilson Hutton"
            title="Treat yourself without worrying about money"
            paragraph="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
          />
          <Article 
            // image=""
            name="By Wilson Hutton"
            title="Take your Easybank card wherever you go"
            paragraph="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
          />
          <Article 
            // image=""
            name="By Claire Robinson"
            title="Our invite-only Beta accounts are now live!"
            paragraph="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
          />
        </div>
      </div>
    </section>
  );
};
 
export default Articles;