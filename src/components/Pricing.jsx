import React from 'react';

const Pricing = () => {
  return (
    <>
      <div className='w-full'>
        <div className="container-price w-full">
          <h2 className="title">Pricing Plan</h2>
          <p className="subtitle">
            WE CAN ALSO CREATE A TABLE LIKE WHAT WE SEE IN VERIOUS SUBSCRIPTIONS OF
            SOFTWARES LIKE CHATGPT ETC.
          </p>
          <div className="pricing-plans">
            <div className="pricing-plan plan-basic">
              <h3>Basic</h3>
              <p className="plan-description">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere cumque nihil
                impedit quo.
              </p>
              <div className="price">$310</div>
              <ul className="features">
                <li>✔ 1 Hour Session</li>
                <li>✔ 1 Hour Session</li>
                <li>✔ 1 Hour Session</li>
                <li>✔ 1 Hour Session</li>
              </ul>
              <button className="buy-now">Buy Now</button>
            </div>
            <div className="pricing-plan plan-normal">
              <h3>Normal</h3>
              <p className="plan-description">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere cumque nihil
                impedit quo.
              </p>
              <div className="price">$610</div>
              <ul className="features">
                <li>✔ 1 Hour Session</li>
                <li>✔ 1 Hour Session</li>
                <li>✔ 1 Hour Session</li>
                <li>✔ 1 Hour Session</li>
              </ul>
              <button className="buy-now">Buy Now</button>
            </div>
            <div className="pricing-plan plan-premium">
              <h3>Premium</h3>
              <p className="plan-description">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere cumque nihil
                impedit quo.
              </p>
              <div className="price">$990</div>
              <ul className="features">
                <li>✔ 1 Hour Session</li>
                <li>✔ 1 Hour Session</li>
                <li>✔ 1 Hour Session</li>
                <li>✔ 1 Hour Session</li>
              </ul>
              <button className="buy-now">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;