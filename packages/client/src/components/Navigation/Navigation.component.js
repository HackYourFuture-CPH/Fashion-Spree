import React from 'react';
import PropTypes from 'prop-types';

import './Navigation.styles.css';

import { Link } from 'react-router-dom';
import { Button } from '../Button/Button.component';

export const Navigation = ({ user, name, loading, logout }) => {
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
          <Link to="/collections" className="collections">
            Our collections
          </Link>
          <Link to="/contact-us" className="contact-us">
            Contact Us
          </Link>
          {user ? (
            <div className="logged-in-container">
              <div className="logged-in-text">
                <div>{name}</div>
                <div>{user?.email}</div>
              </div>
              <div className="logout-button-container">
                <Button
                  label="Logout"
                  backgroundColor="#F5F5F5"
                  onClick={logout}
                />
              </div>
            </div>
          ) : (
            <div className="nav-buttons">
              <Link to="/login" className="login">
                <Button label="Login" backgroundColor="#F5F5F5" />
              </Link>
              <Link to="/signup" className="signup">
                <Button label="Sign Up" backgroundColor="#F5F5F5" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Navigation.propTypes = {
  user: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  loading: PropTypes.string.isRequired,
  logout: PropTypes.string.isRequired,
};
