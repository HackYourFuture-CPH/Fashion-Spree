import React from 'react';

import './Navigation.style.css';

import { Link } from "react-router-dom";


export const Navigation = () => {
  return (

    <div className='nav'>
      <span className='navbar-brand'>Fashion Spree</span>
       <Link to="/" className='home'>Home</Link>
      <Link to="/about-us" className='about-us'>About Us</Link>
      <Link to="/our-collections" className='our-collections'>Our collections</Link>
      <Link to="/contact-us" className='contact-us'>Contact Us</Link>
      <Link to="/login" className='login'>
        <button className="login-button" type='button'> Login </button>
      </Link>
      <Link to="/signup" className='signup'>
        <button className="signup-button" type='button'>Sign Up </button>
      </Link> 
    </div >

  );
};






