import React from 'react';
import './CartTable.styles.css';
import CartSelectedProduct from '../CartSelectedProduct/CartSelectedProduct.component';
import PropTypes from 'prop-types';

export default function CartTable({ products }) {
  return (
    <div className="cart-table-wrapper">
      <div className="cart-table">
        <div>Description</div>
        <div>Amount</div>
        <div>Quantity</div>
        <div>Total</div>
        <div>Action</div>
      </div>
      <div className="cart-table-result">
        {products.map((product) => (
          <CartSelectedProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

CartTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
