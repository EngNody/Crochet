import React from 'react';
import './Hero.css'
import hand_cart from "../Assets/Waving-Hand.png"
import heart_icon from "../Assets/background-crochet9-removebg-preview.png"
import arrow_icon from "../Assets/arrow.png"

const Hero = () => {
  return (
    <div className='hero'>
      
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
      <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_cart} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
      </div>
      <div className='hero-latest-btn'>
      <div>Latest Collection</div>
      <img src={arrow_icon} alt="" />

      </div>
      </div>
    
      <div className="hero-right">
      <img src={heart_icon} alt="" />

      </div>

    </div>
  );
}

export default Hero;
