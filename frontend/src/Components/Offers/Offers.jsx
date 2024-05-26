import React from 'react';
import './Offers.css'
// import exclucive_image from '../Assets/women-crochet1.jpg'
import exclucive_image from '../Assets/women-crochet1-removebg-preview.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h2>Offers For You</h2>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclucive_image} alt="" />
      </div>
    </div>
  );
}

export default Offers;
