import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload-text.png'
import Product from './../../../../frontend/src/Pages/Product';

const AddProduct = () => {

  const[image, setImage] =useState(false);
  const [productDetails,setProductDetails] = useState({
    name:"",
    image:"",
    category:"women",
    new_price:"",
    old_price:""
  })

  const imageHalender = (e) =>{
      setImage(e.target.files[0])
  }

  const ChangeHandler = (e) =>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value})
  }

  const Add_Product =async ()=>{
    console.log(productDetails);

    let responseData;
    let Product = productDetails;

    let formData = new FormData();
    formData.append('product',image);

    await fetch('http://localhost:4000/upload',{
      method:'Post',
      headers:{
        Accept:'application/json',
      },
      body:formData,
    }).then((resp) => resp.json()).then((data)=>{responseData=data})
  }

  return (
    <div className='add-product'>
       <div className="addproduct-itemfield">
        <p>Product title</p>
        <input value={productDetails.name} onChange={ChangeHandler} type="text" name='name' placeholder='Type here'/>
       </div>
       <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productDetails.old_price} onChange={ChangeHandler} type="text" name='old_price' placeholder='Type here' />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input value={productDetails.new_price} onChange={ChangeHandler} type="text" name='new_price' placeholder='Type here' />
        </div>
       </div>
       <div className="addproduct-itemfield">
          <p>Product Category</p>
          <select value={productDetails.category} onChange={ChangeHandler} name="category" className='add-product-selector'>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
          </select>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
              <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumnail-img' />
            </label>
            <input onChange={imageHalender} type='file' name='image' id='file-input' hidden/>
        </div>
        <button onClick={()=>{Add_Product()}} className='addproduct-btn'>Add</button>
    </div>
  )
}

export default AddProduct