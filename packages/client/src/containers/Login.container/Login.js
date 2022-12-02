import React from 'react';
import SignupForm from './SignupForm';
import './Login.css';

export const Login = () => {


  return (
    <main>
      <img className='signup-body-img' src="../../assets/images/signup-body-img.png" alt='woman dress and styles art' />
      <div className='signup-section'>
        <h1 className='signup-text'>Sign Up</h1>
        <div className='signin-with-btn' >
          <button type="button" className='google-signin-btn'>
            <img
              className="signin-icons"
              src="../../assets/icons/Google.png"
              alt="google logo" />
            sign up with Google
          </button>
          <button type='button' className='facebook-signin-btn'>
            <img
              className="signin-icons"
              src="../../assets/icons/facebook.png"
              alt=" facebooklogo"
            />
            sign up with Facebook
          </button>
        </div>
        <p className='or-text'>-OR-</p>
        <div>
          <SignupForm /> ;
        </div>
      </div>
    </main>
  )
};
