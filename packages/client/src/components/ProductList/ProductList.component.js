import React, { useState, useEffect } from 'react';
import './ProductList.component.css';
import ProductCard from '../ProductCard/ProductCard.component';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = () => {
    setIsLoading(true);
    fetch('http://localhost:5001/api/products')
      .then((res) => res.json())
      .then((item) => {
        setProducts(item);
      })
      .then(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchProducts();
  }, []);

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
