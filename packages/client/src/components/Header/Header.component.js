import React from 'react';

import './Header.styles.css';
import { Button } from '../Button/Button.component';
import imageHeader from '../../assets/image-header.png';

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
        <Button label="Start Shopping" backgroundColor="#F2EBE8" />
      </div>
      <div className="header-image">
        <img src={imageHeader} alt="Header" />
      </div>
    </div>
  );
};
