import React from 'react'
import './Admin.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Routes,Route } from 'react-router-dom'
import AddProduct from '../../Components/AddProuduct/AddProduct';
import ListProduct from '../../Components/AddProuduct/AddProduct';

const Admin = () => {
  return (
    <div className='admin'>
    <Sidebar/>
    <Routes>
    <Route path='/AddProduct' element={<AddProduct/>}/>
    <Route path='/listproduct' element={<ListProduct/>}/>
    </Routes>
    </div>
  )
}

export default Admin