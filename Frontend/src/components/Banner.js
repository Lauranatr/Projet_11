import React from 'react';
import iconChat from "../assets/icon-chat.webp";
import iconMoney from "../assets/icon-money.webp";
import iconSecurity from "../assets/icon-security.webp";

const Banner = () => {
    return (
        <section className="feature">
        <div className="feature__item">
          <img src={iconChat} alt="Chat Icon" className="feature__icon" />
          <h2 className="feature__item-title">You are our #1 priority</h2>
          <p className="feature__item-text">
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>

        <div className="feature__item">
          <img src={iconMoney} alt="Chat Icon" className="feature__icon" />
          <h2 className="feature__item-title">
            More savings means higher rates
          </h2>
          <p className="feature__item-text">
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>

        <div className="feature__item">
          <img src={iconSecurity} alt="Chat Icon" className="feature__icon" />
          <h2 className="feature__item-title">Security you can trust</h2>
          <p className="feature__item-text">
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </section>
    );
};

export default Banner;