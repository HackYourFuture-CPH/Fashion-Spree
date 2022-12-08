import React, { useState, useEffect } from 'react';
import ProductList from '../../components/ProductList/ProductList.component';
import './CollectionsPage.style.css';
import DropDownView from '../../components/CategoriesListDropDown/CategoriesListDropDown.component';
import { apiURL } from '../../apiURL';

export const CollectionsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [onSelectedCategory, setOnSelectedCategory] = useState('');
  const [onSelectedSortBy, setOnSelectedSortBy] = useState('');
  // const [onSelectedAllFilter, setOnSelectedAllFilter] = useState('');

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

  const [category, setCategoy] = useState([]);
  const fetchCategories = () => {
    fetch(`${apiURL()}/categories/`)
      .then((res) => res.json())
      .then((item) => {
        setCategoy(item);
      });
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const categories = category.map(
    (element) =>
      element.name.charAt(0).toUpperCase() +
      element.name.slice(1).toLowerCase(),
  );

  const sortBy = ['Recent Collections', 'Alphabetically', 'Price ↓', 'Price ↑'];
  const allFilter = ['Price', 'Size', 'Color', 'Reviews', 'Brand'];

  const fetchDropdown = (categoryId) => {
    fetch(`${apiURL()}/products?category=${categoryId}`)
      .then((res) => res.json())
      .then((item) => {
        setProducts(item);
      });
  };
  useEffect(() => {
    fetchDropdown(onSelectedCategory);
  }, [onSelectedCategory]);

  return (
    <>
      <div className="list-view">
        <DropDownView
          lable="Categories"
          options={categories}
          select={(categoryName) => setOnSelectedCategory(categoryName)}
        />
        <DropDownView
          lable="Sort By Most Recent"
          options={sortBy}
          select={(sortByName) => setOnSelectedSortBy(sortByName)}
        />
        <DropDownView
          lable="All Filter"
          options={allFilter}
          // select={(allFilterName) => setOnSelectedAllFilter(allFilterName)}
          showFilterIcon
        />
      </div>

      <div>
        <ProductList
          isLoading={isLoading}
          products={products}
          onSelectedSortBy={onSelectedSortBy}
        />
      </div>
    </>
  );
};
