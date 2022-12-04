import React from 'react';
import './CartSelectedProduct.styles.css';
import PropTypes from 'prop-types';

export default function CartSelectedProduct({ product }) {
  return (
    <div className="cart-selected-wrapper">
      <div className="cart-selected-blank">
        <input type="checkbox" name="" id="" />
      </div>
      <div className="cart-selected-desc">
        <span>{product.description}</span>
      </div>
      <div className="cart-selected-amount">
        <span>{product.amount}</span>
      </div>
      <div className="cart-selected-quantity">
        <span>{product.quantity}</span>
      </div>
      <div className="cart-selected-total">
        <span>Dkk 199,99</span>
      </div>
      <div className="cart-selected-action">
        <button type="button">Remove</button>
      </div>
    </div>
  );
}

CartSelectedProduct.propTypes = {
  product: PropTypes.exact({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
