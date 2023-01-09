import React from 'react';
import './CartSelectedProduct.styles.css';
import PropTypes from 'prop-types';
import removeIcon from '../../../assets/remove-btn.png';

export default function CartSelectedProduct({
  product,
  handleChange,
  handleRemove,
}) {
  return (
    <div className="cart-selected-wrapper">
      <div className="cart-selected-blank">
        <input
          type="checkbox"
          name=""
          id=""
          onChange={() => handleChange(product)}
        />
      </div>
      <div className="cart-selected-desc">
        <span>{product.name}</span>
      </div>
      <div className="cart-selected-amount">
        <span>{+product.price}</span>
      </div>
      <div className="cart-selected-quantity">
        <span>{product.quantity}</span>
      </div>
      <div className="cart-selected-total">
        <span>{product.price * product.quantity}</span>
      </div>
      <div className="cart-selected-action">
        <button
          type="button"
          onClick={() => handleRemove(product)}
          className="removeBtn"
        >
          <img src={removeIcon} alt="removeIcon" />
        </button>
      </div>
    </div>
  );
}

CartSelectedProduct.propTypes = {
  product: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    selected: PropTypes.bool,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};
