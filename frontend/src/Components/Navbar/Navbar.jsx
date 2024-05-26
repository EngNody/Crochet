import React, { useContext, useRef, useState } from 'react';
import "./Navbar.css";
// import Wedding_Pink_cotton  from '../Assets/Wedding_Pink_cotton.jpg'
// import Noda_Crochet_3 from '../Assets/Noda_Crochet_3.jpg'
import Noda_Crochet_5 from '../Assets/Noda_Crochet_5.jpg'
// import cart_icon_red from '../Assets/cart_icon_red.png'
import cart_icon_black from '../Assets/cart_icon-black.jpg'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/Arrow_Down.webp'

const Navbar = () => {

  const[menu,setMenu]=useState("shop");
  const {getTotalCartItems}=useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle= (e) =>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">
        {/* <img src={Noda_Crochet_3} alt="" /> */}
        <img src={Noda_Crochet_5} alt="" />
        <p>Noda Crochet</p>
        </div>
        <img className='nav_dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className="nav-menu">
          <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:'none'}} to='/'>Shop</Link>  {menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("mens")}}> <Link style={{textDecoration:'none'}} to='/mens'>Men</Link>  {menu==="mens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("womens")}}> <Link style={{textDecoration:'none'}} to='/womens'>Women</Link>  {menu==="womens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}}> <Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>  {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav_login_cart">
          <Link to="login"><button>Login</button></Link>
          {/* <img src={cart_icon_red} alt="" className='cart_icon_red'/> */}
          <Link to={"cart"}> <img src={cart_icon_black} alt="" className='cart_icon_black'/></Link> 
          <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
      </div>
      
    </div>
  );
}

export default Navbar;
