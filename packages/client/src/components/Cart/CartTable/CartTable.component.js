import React, { useState } from 'react';
import './CartTable.styles.css';
import CartSelectedProduct from '../CartSelectedProduct/CartSelectedProduct.component';
import PropTypes from 'prop-types';
import { useUserContext } from '../../../userContext';

export default function CartTable({ products, setProducts, isLoading }) {
  const { user } = useUserContext();
  const [selected, setSelected] = useState(false);

  const handleChange = (product) => {
    const productCart = [...products];

    productCart.forEach((row, index) => {
      if (productCart[index].id === product.id)
        productCart[index].selected = !productCart[index].selected;
    });
    setSelected(!selected);
    setProducts(productCart);
  };
  const handleRemove = (product) => {
    const filtered = products.filter((item) => item.id !== product.id);
    setProducts(filtered);
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
        {!user && <span>Please log in to see your shopping cart</span>}
        {isLoading && <span>LOADING...</span>}
        {user && products.length === 0 && <span>Your cart is empty</span>}
        {user &&
          products.map((product) => (
            <CartSelectedProduct
              key={product.id}
              product={product}
              handleChange={handleChange}
              handleRemove={handleRemove}
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
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      selected: PropTypes.bool,
    }),
  ).isRequired,
  setProducts: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
