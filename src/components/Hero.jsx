import React from 'react';
import './Pricing.css';
import '../style/Hero.css';
import heroimg from '../assets/Hero-img.jpg';
import Navbar from './Navbar';
import WhyUs from './WhyUs.jsx';
import Stats from './Stats';
import Testimonials from './Testimonials';
const Hero = () => {
  return (
    <>
      <div className='h-[100vh] background-hero'>
        <img src={heroimg} alt='hero' className='hero-img' />
        <div className='text-white hero-main-box'>
          <div className='text-white hero-main-heading'>
          <div className='text-[20px] text-center text-slate-200 bg-[rgba(20,40,114,1)] hero-tagline'>
          Best in Both Quality and Services
          </div>
            Event Management
            <div className='flex text-[17px] gap-[1rem] justify-around mt-[1rem]'>
            <div className=''>
                Date: 23-24-2021
              </div>
              <div className=''>
                Estd: 2-24-2021
              </div>
              <div className=''>
                People Trusted
              </div>
            </div>
            <div className='flex justify-around mt-12'>
              <div className='hero-sub'>
                Contact Us
              </div>
              <div className='hero-sub'>
                Register Now
          </div>
            </div>
          </div>
        </div>
      </div>

      <Stats />
      <br/>
      <br/>
      <WhyUs />
        <Testimonials />
    </>
  );
};

export default Hero;
{/* <div className="pricing-container">
      <h2>CHOOSE ONE PACKAGE</h2>
      <h1>Pricing Plan</h1>
      <p>WE CAN ALSO CREATE A TABLE LIKE WHAT WE SEE IN VERIOUS SUBSCRIPTIONS OF SOFTWARES LIKE CHATGPT ETC.</p>
      <div className="pricing-plans">
        <div className="pricing-plan">
          <h3>Basic</h3>
          <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere cumque nihil impedit quo.</p>
          <div className="price">310$</div>
          <ul className="features">
            <li>✔ 1 Hour Session</li>
            <li>✔ 1 Hour Session</li>
            <li>✔ 1 Hour Session</li>
            <li>✔ 1 Hour Session</li>
          </ul>
          <button className="buy-now">Buy Now</button>
        </div>
        <div className="pricing-plan">
          <h3>Normal</h3>
          <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere cumque nihil impedit quo.</p>
          <div className="price">610$</div>
          <ul className="features">
            <li>✔ 1 Hour Session</li>
            <li>✔ 1 Hour Session</li>
            <li>✔ 1 Hour Session</li>
            <li>✔ 1 Hour Session</li>
          </ul>
          <button className="buy-now">Buy Now</button>
        </div>
        <div className="pricing-plan">
          <h3>pPmium</h3>
          <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere cumque nihil impedit quo.</p>
          <div className="price">990$</div>
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
  ); */}