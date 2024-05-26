

import React from 'react';
import './css/LoginSignup.css'

const LoginSignup = () => {
  return (
      <div className="loginsignup" id='loginsignup'>
       <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type="text" placeholder='Name'/>
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" id='checkbox1' placeholder='checkbox' />
          <p>By continuting, i agree to the terms of use & privacy policy.</p>
        </div>
        </div>
      </div>
  );
}

export default LoginSignup;
