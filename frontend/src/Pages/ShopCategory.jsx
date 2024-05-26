
import React, { useContext } from 'react';
import './css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/drop_down_icon-removebg-preview.png'
import Item from '../Components/Item/Item'
// import all_product from './../Components/Assets/all_product';

const ShopCategory = (props) => {

const {all_product}=useContext(ShopContext)

  return (
      <div className="shop-category">

<div className='topTime'>
  <div className='topTimep'>
          <h2>FLAT 50% OFF</h2>
        
          <p><span>12</span> Hours <span>20</span> Mins</p>
        
          <button>Explore Now</button>
      </div>
      <div className="topTime_img">
      <img className='shopCategory-banner' src={props.banner} alt="" />
  
      </div>
</div>

        {/* <img className='shopCategory-banner' src={props.banner} alt="" /> */}
        <div className="shopCategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopCategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="shopcategory-Products">
          {all_product.map((item,i)=>{
            if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}  old_price={item.old_price}  />
            }else{
              return null;
            }
          })}
        </div>
        <div className="shopcategory-loadmore">
          Explore More
        </div>
      </div>
  );
}

export default ShopCategory;
