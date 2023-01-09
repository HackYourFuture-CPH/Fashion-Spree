import React from 'react';
import PropTypes from 'prop-types';
import './CartCount.styles.css';

export default function CartCount({ itemCount }) {
  return (
    <div className="cart-count">
      <span>Cart ({itemCount})</span>
    </div>
  );
}

CartCount.propTypes = {
  itemCount: PropTypes.number.isRequired,
};
