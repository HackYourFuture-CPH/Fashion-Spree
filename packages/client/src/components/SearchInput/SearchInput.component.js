import React, { useEffect, useState } from 'react';
import './SearchInput.style.css';
import ProductCard from '../ProductCard/ProductCard.component';

const SearchInput = () => {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const fetchProducts = () => {
    fetch('http://localhost:5001/api/products')
      .then((res) => res.json())
      .then((item) => {
        setProducts(item);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const filteredResult = products.filter((product) =>
      product.name.toLocaleLowerCase().includes(searchInput),
    );
    setProducts(filteredResult);
  }, [searchInput, products]);

  return (
    <>
      <div className="search-container">
        <input
          placeholder="Search"
          className="search-input"
          onChange={handleChange}
          value={searchInput}
        />
      </div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price}
        />
      ))}
    </>
  );
};

export default SearchInput;
