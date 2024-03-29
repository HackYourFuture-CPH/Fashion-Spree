import React, { useState, useEffect, useCallback } from 'react';
import ProductList from '../../components/ProductList/ProductList.component';
import './CollectionsPage.style.css';
import DropDownView from '../../components/CategoriesListDropDown/CategoriesListDropDown.component';
import SearchInput from '../../components/SearchInput/SearchInput.component';
import { apiURL } from '../../apiURL';
import { useUserContext } from '../../userContext';

export const CollectionsPage = () => {
  const { user } = useUserContext();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  // const [onSelectedAllFilter, setOnSelectedAllFilter] = useState('');    Remain to work
  const [categories, setCategories] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchProducts = useCallback(() => {
    setIsLoading(true);
    const url = `${apiURL()}/products${
      selectedCategory ? `?category=${selectedCategory}` : ''
    }`;
    fetch(url, {
      headers: {
        token: `token ${user?.uid}`,
      },
    })
      .then((res) => res.json())
      .then((items) => {
        setProducts(items);
        setIsLoading(false);
      });
  }, [selectedCategory, user]);

  // fetching Api by products or products by category
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

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

  const categoryOptions = categories.map((element) => element.name);

  // sortFunction for sort products in different orders
  const sortOptions = [
    'Recent Collections',
    'Alphabetically',
    'Price Low to High',
    'Price High to Low',
  ];

  // Remain to work filter options
  const filterOptions = ['Price', 'Size', 'Color', 'Reviews', 'Brand'];

  // search product by name in searchbar
  useEffect(() => {
    function sortFunction(a, b) {
      if (sortOrder === '') {
        return 0;
      }
      if (sortOrder === 'Recent Collections') {
        return a.created_at > b.created_at ? -1 : 1;
      }
      if (sortOrder === 'Alphabetically') {
        return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
      }
      if (sortOrder === 'Price Low to High') {
        return Number(a.price) > Number(b.price) ? 1 : -1;
      }
      if (sortOrder === 'Price High to Low') {
        return Number(a.price) < Number(b.price) ? 1 : -1;
      }
      return 0;
    }
    products.sort(sortFunction);
    const filterResults = products.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase()),
    );
    setFilteredProducts(filterResults);
  }, [searchInput, products, sortOrder]);

  const addFavorite = (key) => {
    fetch(`${apiURL()}/favorites`, {
      method: 'POST',
      headers: {
        token: `token ${user?.uid}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_id: key,
      }),
    }).then((res) => {
      if (res.ok) {
        fetchProducts();
      }
    });
  };

  return (
    <>
      <div className="list-view">
        <DropDownView
          lable="Categories"
          options={categoryOptions}
          onSelect={(categoryName) => setSelectedCategory(categoryName)}
          showFilterIcon={false}
        />
        <DropDownView
          lable="Sort By Most Recent"
          options={sortOptions}
          onSelect={(sortByName) => setSortOrder(sortByName)}
          showFilterIcon={false}
        />
        <DropDownView
          lable="All Filter"
          options={filterOptions}
          onSelect={() => {}}
          // onSelect={(allFilterName) => setOnSelectedAllFilter(allFilterName)}
          showFilterIcon={true}
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
          addFavorite={addFavorite}
        />
      </div>
    </>
  );
};
