import React from 'react';
import './ProductList.component.css';
import Products from './Products';

export default function ProductList() {
  const ListOfProducts = Products.map((product) => {
    return (
      <div className="product">
        <img src={product.image} alt="fashion-lady" />
        <p>{product.text}</p>
        <p>Price: {product.price}</p>
      </div>
    );
  });

  return (
    <div className="product-list-container">
      <div className="rendered-product">{ListOfProducts}</div>
    </div>
  );
}
