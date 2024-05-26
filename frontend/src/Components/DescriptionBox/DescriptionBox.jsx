import React from 'react';
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit necessitatibus nesciunt, excepturi vel rem odio ipsum fuga debitis voluptate ex architecto, nemo atque suscipit voluptatibus repudiandae blanditiis? Unde, tenetur debitis.</p>
        {/* <p></p> */}
      </div>
    </div>
  );
}

export default DescriptionBox;
