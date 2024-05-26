

import React from 'react';
import './Breadcrums.css'
import arrow_icon from '../Assets/arrowicon.png'

const Breadcrum = (props) => {
  const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} className='small'
       alt="" /> SHOP <img src={arrow_icon} 
       className='small' alt="" />
        {product.category} <img src="arrow_icon" 
        className='small' alt="" /> {product.name}
    </div>
  );
} 

export default Breadcrum;
