import React from 'react';
import './CartTable.styles.css';
import CartSelectedProduct from '../CartSelectedProduct/CartSelectedProduct.component';
import PropTypes from 'prop-types';

export default function CartTable({ products }) {
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
