\import React from 'react';
import './Body.style.css';

export const Body = () => {
  return (
    <main className="main">
      <span className="shop-our-collections">Shop Our collections</span>
      <div className="home-main-img-container">
        <div className="upper-img-container">
          <img
            className="img-women-accessories"
            src="/assets/images/body-images/women-accessories.png"
            alt="earring and shoe"
          />
          <div className="upper-right-container">
            <img
              className="img-men-accessories"
              src="/assets/images/body-images/men-accessories.png"
              alt="men shoe and clothes"
            />
            <img
              className="img-handbag"
              src="/assets/images/body-images/handbag.png"
              alt="a person holding a handbag"
            />
          </div>
        </div>
        <div className="lower-img-container">
          <div className="lower-left-container">
            <img
              className="img-woman-glass"
              src="/assets/images/body-images/glass.png"
              alt="a woman wearing glasses"
            />
            <img
              className="img-pearl-earring"
              src="/assets/images/body-images/earring.png"
              alt="pearl earring"
            />
          </div>
          <img
            className="img-closet"
            src="/assets/images/body-images/closet.png"
            alt="big wardrobe closet with clothes hanging"
          />
        </div>
      </div>
      <button className="shopnow-button" type="button">
        Shop Now
      </button>
    </main>
  );
};