import React from 'react';
import { Link } from 'react-router-dom';

import imageHeader from '../../assets/image-header.png';
import { Button } from '../Button/Button.component';
import './Header.styles.css';

export const Header = () => {
  return (
    <div className="header-component">
      <div className="header-text">
        <h1>Fashion Shopping made easier with Fashion Spree</h1>
        <div className="subtitle">
          <p>
            We are bringing shopping to your doorstep !! With the new Fashion
            spree webshop, you can now shop for all fashion accessories with
            ease.
          </p>
        </div>
        <Link to="/collections">
          <Button label="Start Shopping" backgroundColor="#F5F5F5" />
        </Link>
      </div>
      <div className="header-image">
        <img src={imageHeader} alt="Header" />
      </div>
    </div>
  );
};
