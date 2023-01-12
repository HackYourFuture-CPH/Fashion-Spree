import React from 'react';
import './CartTable.styles.css';
import CartSelectedProduct from '../CartSelectedProduct/CartSelectedProduct.component';
import PropTypes from 'prop-types';

export default function CartTable({ products, handleChange }) {
  return (
    <div className="cart-table-wrapper">
      <div className="cart-table-headers">
        <div className="cart-table-blank">&nbsp;</div>
        <div className="cart-table-desc">Description</div>
        <div className="cart-table-amount">Amount</div>
        <div className="cart-table-quantity">Quantity</div>
        <div className="cart-table-total">Total</div>
        <div className="cart-table-action">Action</div>
      </div>
      <div className="cart-table-products">
        {products.length === 0 && <span>Your cart is empty</span>}
        {products.map((product) => (
          <CartSelectedProduct
            key={(product.order_id, product.variant_id)}
            product={product}
            handleChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
}

CartTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.exact({
      order_id: PropTypes.number.isRequired,
      variant_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
};
