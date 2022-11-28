import React from 'react';

import './Navigation.styles.css';

import { Link } from 'react-router-dom';
import { Button } from '../Button/Button.component';

export const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="navigation">
        <div className="nav">
          <span className="navbar-brand">Fashion Spree</span>
          <Link to="/" className="home">
            Home
          </Link>
          <Link to="/about-us" className="about-us">
            About Us
          </Link>
          <Link to="/our-collections" className="our-collections">
            Our collections
          </Link>
          <Link to="/contact-us" className="contact-us">
            Contact Us
          </Link>
          <div className="nav-buttons">
            <Link to="/login" className="login">
              <Button label="Login" backgroundColor="#F5F5F5" />
            </Link>
            <Link to="/signup" className="signup">
              <Button label="Sign Up" backgroundColor="#F5F5F5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
