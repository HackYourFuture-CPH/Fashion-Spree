import React, { useState, useEffect } from 'react';
import ProductList from '../../components/ProductList/ProductList.component';
import './CollectionsPage.style.css';
import DropDownView from '../../components/CategoriesListDropDown/CategoriesListDropDown.component';
import SearchInput from '../../components/SearchInput/SearchInput.component';
import { apiURL } from '../../apiURL';

export const CollectionsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  // const [onSelectedAllFilter, setOnSelectedAllFilter] = useState('');    Remain to work
  const [categories, setCategories] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  // fetching Api by products or products by category
  useEffect(() => {
    function fetchProducts(categoryName) {
      setIsLoading(true);
      const url = `${apiURL()}/products${
        selectedCategory ? `?category=${categoryName}` : ''
      }`;
      fetch(url)
        .then((res) => res.json())
        .then((items) => {
          setProducts(items);
        });
    }
    fetchProducts(selectedCategory);
    setIsLoading(false);
  }, [selectedCategory]);

  // fetching Api to categories options in dropdown List.
  useEffect(() => {
    const fetchCategories = () => {
      fetch(`${apiURL()}/categories/`)
        .then((res) => res.json())
        .then((item) => {
          setCategories(item);
        });
    };
    fetchCategories();
  }, []);

  const categoryOptions = categories.map(
    (element) =>
      element.name.charAt(0).toUpperCase() +
      element.name.slice(1).toLowerCase(),
  );

  // sortFunction for sort products in diffrent orders
  const sortOptions = [
    'Recent Collections',
    'Alphabetically',
    'Price ↓',
    'Price ↑',
  ];

  useEffect(() => {
    function sortFunction(a, b) {
      if (sortOrder === '') {
        return 0;
      }
      if (sortOrder === 'New arrivals') {
        return a.created_at > b.created_at ? -1 : 1;
      }
      if (sortOrder === 'Alphabetically') {
        return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
      }
      if (sortOrder === 'Price ↓') {
        return Number(a.price) > Number(b.price) ? 1 : -1;
      }
      if (sortOrder === 'Price ↑') {
        return Number(a.price) < Number(b.price) ? 1 : -1;
      }
      return 0;
    }
    filteredProducts.sort(sortFunction);
  }, [filteredProducts, sortOrder]);

  // Remain to work filteroptions
  const filterOptions = ['Price', 'Size', 'Color', 'Reviews', 'Brand'];

  // search product by name in searchbar
  useEffect(() => {
    const filterResults = products.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase()),
    );
    setFilteredProducts(filterResults);
  }, [searchInput, products]);

  return (
    <>
      <div className="list-view">
        <DropDownView
          lable="Categories"
          options={categoryOptions}
          onSelect={(categoryName) => setSelectedCategory(categoryName)}
        />
        <DropDownView
          lable="Sort By Most Recent"
          options={sortOptions}
          onSelect={(sortByName) => setSortOrder(sortByName)}
        />
        <DropDownView
          lable="All Filter"
          options={filterOptions}
          // onSelect={(allFilterName) => setOnSelectedAllFilter(allFilterName)}
          showFilterIcon
        />
      </div>
      <div>
        <SearchInput
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </div>
      <div>
        <ProductList
          isLoading={isLoading}
          products={products}
          filteredProducts={filteredProducts}
        />
      </div>
    </>
  );
};
