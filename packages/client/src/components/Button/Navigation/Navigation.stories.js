import React from 'react';

import { Navigation } from './Navigation.component.js';

export default {
  title: 'Example/Navigation',
  component: Navigation.component,
};

// export const Basic = () => <Navigation />;

export const Basic = () => {
  return (
    <div className="nav">
      <span className="navbar-brand">Fashion Spree</span>
      <a href="/" className="home">
        Home
      </a>
      <a href="/about-us" className="about-us">
        About Us
      </a>
      <a href="/our-collections" className="our-collections">
        Our collections
      </a>
      <a href="/contact-us" className="contact-us">
        Contact Us
      </a>
      <a href="/login" className="login">
        <button className="login-button" type="button">
          {' '}
          Login{' '}
        </button>
      </a>
      <a href="/signup" className="signup">
        <button className="signup-button" type="button">
          Sign Up{' '}
        </button>
      </a>
    </div>
  );
};
