import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/navlogo.jpg'
import navProfile from '../../assets/navProfile.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='left-navbar'>
      <img src={navlogo} alt="" className='nav-logo'/>
      <div className='navbar-title'>
        <h1>Crochet</h1>
        <p>Control Panel</p>
      </div>
    </div>
    <img src={navProfile} alt="" className='nav-profile'/>
    </div>
  )
}

export default Navbar