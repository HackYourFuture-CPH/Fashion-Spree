import React from 'react';
import './CartTable.styles.css';
import CartSelectedProduct from '../CartSelectedProduct/CartSelectedProduct.component';
import PropTypes from 'prop-types';

export default function CartTable({ products, setProducts }) {
  const handleChange = (product) => {
    const productCart = [...products];
    productCart.forEach((row, index) => {
      if (productCart[index].id === product.id)
        productCart[index].selected = !productCart[index].selected;
    });
    setProducts(productCart);
  };

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
          <CartSelectedProduct
            key={product.id}
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
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  setProducts: PropTypes.func.isRequired,
};
