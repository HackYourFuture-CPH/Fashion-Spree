import React from 'react';
import PropTypes from 'prop-types';
import './ProductList.component.css';
import ProductCard from '../ProductCard/ProductCard.component';

export default function ProductList({ isLoading, products, filteredProducts }) {
  const ListOfProducts = filteredProducts.map((product) => {
    return (
      <div className="product" key={Math.random()}>
        <ProductCard title={product.name} price={product.price} />
      </div>
    );
  });

  return (
    <div className="product-list-container">
      {isLoading && <p>Loading...</p>}
      {products.length === 0 || filteredProducts.length === 0 ? (
        <p>There is no product available</p>
      ) : (
        <div className="rendered-product">{ListOfProducts}</div>
      )}
    </div>
  );
}
ProductList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
    .isRequired,
  filteredProducts: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
    .isRequired,
};
