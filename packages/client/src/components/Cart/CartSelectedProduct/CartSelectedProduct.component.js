import React from 'react';
import './CartSelectedProduct.styles.css';
import PropTypes from 'prop-types';

export default function CartSelectedProduct({ product }) {
  return (
    <div className="">
      <div className="">
        <input type="checkbox" name="" id="" />
      </div>
      <span>{product.description}</span>
      <span>{product.amount}</span>
      <span>{product.quantity}</span>
      <span>Dkk 199,99</span>
      <button type="button">Remove</button>
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
