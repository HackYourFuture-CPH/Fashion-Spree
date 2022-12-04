import React from 'react';
import './Body.styles.css';
import { Button } from '../Button/Button.component';
import imgWomenAccessories from '../../assets/images/body-images/women-accessories.png';
import imgMenAccessories from '../../assets/images/body-images/men-accessories.png';
import imgHandbag from '../../assets/images/body-images/handbag.png';
import imgGlass from '../../assets/images/body-images/glass.png';
import imgEarring from '../../assets/images/body-images/earring.png';
import imgCloset from '../../assets/images/body-images/closet.png';

export const Body = () => {
  return (
    <main className="main">
      <span className="shop-our-collections">
        <h2>Shop Our collections</h2>
      </span>
      <div className="home-main-img-container">
        <div className="upper-img-container">
          <div className="upper-left-container">
            <img
              className="img-women-accessories"
              src={imgWomenAccessories}
              alt="earring and shoe"
            />
          </div>
          <div className="upper-right-container">
            <img
              className="img-men-accessories"
              src={imgMenAccessories}
              alt="men shoe and clothes"
            />
            <img
              className="img-handbag"
              src={imgHandbag}
              alt="a person holding a handbag"
            />
          </div>
        </div>
        <div className="lower-img-container">
          <div className="lower-left-container">
            <img
              className="img-woman-glass"
              src={imgGlass}
              alt="a woman wearing glasses"
            />
            <img
              className="img-pearl-earring"
              src={imgEarring}
              alt="pearl earring"
            />
          </div>
          <div className="lower-right-container">
            <img
              className="img-closet"
              src={imgCloset}
              alt="big wardrobe closet with clothes hanging"
            />
          </div>
        </div>
      </div>
      <Button
        className="shopnow-button"
        label="Show Now"
        backgroundColor="#F5F5F5"
      />
    </main>
  );
};
