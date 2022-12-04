import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ProductList.component.css';
import ProductCard from '../ProductCard/ProductCard.component';
import { apiURL } from '../../apiURL';

export default function ProductList({ category }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = (categoryId) => {
    setIsLoading(true);
    fetch(`${apiURL()}/products?category=${categoryId}`)
      .then((res) => res.json())
      .then((item) => {
        setProducts(item);
      })
      .then(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchProducts(category);
  }, [category]);

  const ListOfProducts = products.map((product) => {
    return (
      <div className="product">
        <ProductCard title={product.name} price={product.price} />
      </div>
    );
  });

  return (
    <div>
      <div className="product-list-container">
        {isLoading && <p>Loading...</p>}
        {products.length === 0 ? (
          <p>There is no product available</p>
        ) : (
          <div className="rendered-product">{ListOfProducts}</div>
        )}
      </div>
    </div>
  );
}
ProductList.propTypes = {
  category: PropTypes.string.isRequired,
};
