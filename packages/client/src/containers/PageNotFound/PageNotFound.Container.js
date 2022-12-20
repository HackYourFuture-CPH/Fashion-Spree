import React from 'react';
import './PageNotFound.Style.css';
import image404 from '../../assets/404.jpeg';
import '../../components/Navigation/Navigation.styles.css';
import { NavLink } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <div className="page-not-found-container">
      <img src={image404} alt="img" />
      <div id="info">
        <NavLink to="/" className="home">
          Back to Home Page
        </NavLink>
      </div>
    </div>
  );
};
