import React from 'react';
import './ProductCard.styles.css';
import CartIcon from '../../assets/cart-icon.svg';
import FavoriteIcon from '../../assets/favorite-icon.svg';
import StarRateIcon from '../../assets/star-rate-icon.svg';
import BackgroundImage from '../../assets/jeans&shoes.jpg';

const ProductCard = () => {
  return (
    <div className="product-card-wrapper">
      <div className="product-img-wrapper">
        <img src={BackgroundImage} alt="Cart Icon" className="product-img" />
        <div className="cart-favorite-wrapper">
          <img src={CartIcon} alt="Cart Icon" />
          <img src={FavoriteIcon} alt="" />
        </div>
      </div>
      <h2 className="product-title"> Slim Fit Jeans</h2>
      <div className="price-rate-wrapper">
        <div className="product-price-wrapper">
          <p>Dkk</p>
          <p>199,99</p>
        </div>
        <div className="product-rate-wrapper">
          <img src={StarRateIcon} alt="Cart Icon" />
          <p>4.5</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
