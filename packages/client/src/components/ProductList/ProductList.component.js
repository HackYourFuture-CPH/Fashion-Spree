import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ProductList.component.css';
import ProductCard from '../ProductCard/ProductCard.component';
import { apiURL } from '../../apiURL';
import SearchInput from '../SearchInput/SearchInput.component';

export default function ProductList({ category, sortBy, allFilter }) {
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

  const fetchDropdown = (categoryId) => {
    fetch(`${apiURL()}/products?category=${categoryId}`)
      .then((res) => res.json())
      .then((item) => {
        setProducts(item);
      });
  };
  useEffect(() => {
    fetchDropdown(category);
  }, [category]);

  const sortFunction = (sort) => {
    return products.sort((a, b) => {
      if (sort === '') {
        return 0;
      }
      if (sort === 'Alphabetically') {
        return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
      }
      if (sort === 'Price ↓') {
        return Number(a.price) > Number(b.price) ? 1 : -1;
      }
      if (sort === 'Price ↑') {
        return Number(a.price) < Number(b.price) ? 1 : -1;
      }

      return 0;
    });
  };
  sortFunction(sortBy);

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
        {products.length === 0 ? (
          <p>There is no product available</p>
        ) : (
          <div className="rendered-product">{ListOfProducts}</div>
        )}
      </div>
    </>
  );
}
ProductList.propTypes = {
  category: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  allFilter: PropTypes.string.isRequired,
};
