import React, { useState, useEffect } from 'react';
import './ProductList.component.css';
import ProductCard from '../ProductCard/ProductCard.component';
import { apiURL } from '../../apiURL';
import SearchInput from '../SearchInput/SearchInput.component';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchProducts = () => {
    setIsLoading(true);
    fetch(`${apiURL()}/products/`)
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

  useEffect(() => {
    const filterResults = products.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase()),
    );
    setFilteredProducts(filterResults);
  }, [searchInput, products]);

  const ListOfProducts = filteredProducts.map((product) => {
    return (
      <div className="product">
        <ProductCard title={product.name} price={product.price} />
      </div>
    );
  });

  return (
    <>
      <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
      <div className="product-list-container">
        {isLoading && <p>Loading...</p>}
        {products.length === 0 || filteredProducts.length === 0 ? (
          <p>There is no product available</p>
        ) : (
          <div className="rendered-product">{ListOfProducts}</div>
        )}
      </div>
    </>
  );
}
