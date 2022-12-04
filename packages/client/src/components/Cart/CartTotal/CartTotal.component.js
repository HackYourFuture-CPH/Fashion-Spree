import React from 'react';
import './CartTotal.styles.css';
import PropTypes from 'prop-types';

export default function CartTotal({ subtotal, delivery, shipping, total }) {
  return (
    <div className="cart-total-wrapper">
      <div className="cart-total-header">
        <div>Subtotal</div>
        <div>Delivery fee</div>
        <div>Shipping fee</div>
        <div>Total</div>
      </div>
      <div className="cart-total">
        <div>{subtotal}</div>
        <div>{delivery || 'Free'}</div>
        <div>{shipping || 'Free'}</div>
        <div>{total}</div>
      </div>
    </div>
  );
}

CartTotal.propTypes = {
  subtotal: PropTypes.number.isRequired,
  delivery: PropTypes.number.isRequired,
  shipping: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
