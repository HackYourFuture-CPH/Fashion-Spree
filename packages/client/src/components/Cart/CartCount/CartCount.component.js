import React from 'react';
import PropTypes from 'prop-types';
import './CartCount.styles.css';

export default function CartCount({ productSum }) {
  return (
    <div className="cart-count">
      <span>Cart ({productSum})</span>
    </div>
  );
}

CartCount.propTypes = {
  productSum: PropTypes.number.isRequired,
};
