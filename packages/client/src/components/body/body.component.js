import React from 'react';

import './body.style.css';
import WomenAccessories from '../../assets/women-accessories.png';
import MenAccessories from '../../assets/men-accessories.png';
import Handbag from '../../assets/handbag.png';
import womanGlasses from '../../assets/glass.png';
import PearlEarring from '../../assets/earring.png';
import Closet from '../../assets/closet.png';

export const Body = () => {
  return (
    <main className='main'>
      <span className='shop-our-collections'>Shop Our collections</span>
      <div className="home-main-img-container">
        <div className="upper-img-container">
          <img className="img-women-accessories" src={WomenAccessories} alt="earring and shoe" />
          <div className="upper-right-container">
            <img
              className="img-men-accessories" src={MenAccessories}
              alt="men shoe and clothes" />
            <img className="img-handbag" src={Handbag} alt="a person holding a handbag" />
          </div>
        </div>
        <div className='lower-img-container'>
          <div className='lower-left-container'>
            <img className="img-woman-glass" src={womanGlasses} alt="a woman in glasses" />
            <img className="img-pearl-earring" src={PearlEarring} alt="pearl earring" />
          </div>
          <img className="img-closet" src={Closet} alt="big wardrobe closet with clothes hanging" />
        </div>
      </div>
      <button className="shopnow-button" type="button">
        Shop Now
      </button>
    </main>
  );
};
