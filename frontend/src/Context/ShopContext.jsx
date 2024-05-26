

import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product.js";
// import Product from './../Pages/Product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};

  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  console.log(cartItems);

  const addToCart = (itemId) => {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}));
  };
// my result
  const getTotalCartAmount = () => {
    let totalAmount  = 0;
    for (const item in cartItems){
          if (cartItems[item] > 0) {
            const itemInfo = all_product.find((Product) => Product.id === Number(item));
            totalAmount += itemInfo.new_price * cartItems[item];
          } 
    }
    return  totalAmount;

  }
// the real result from GOOGLE
//   const getTotalCartAmount = () => {
//     let totalAmount = 0;

//     for (const item in cartItems) {
//         if (cartItems[item] > 0) {
//             const itemInfo = all_product.find((Product) => Product.id === Number(item));
//             totalAmount += itemInfo.new_price * cartItems[item];
//         }
//     }

//     return totalAmount;
// };

    const getTotalCartItems = () =>{
      let totalItems =0;
      for (const item in cartItems){
        if (cartItems[item] > 0) {
          totalItems += cartItems[item]
        }
      }
      return totalItems
    }


  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
