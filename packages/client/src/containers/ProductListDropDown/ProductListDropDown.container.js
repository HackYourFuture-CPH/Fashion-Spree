import React from 'react';
import ProductListDropdown from '../../components/ProductListDropDown/ProductListDropDown.component';
import './ProductListDropDown.style.css';

function ProductListDropDown() {
  const Categories = [
    'Categories',
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
  ];
  const SortBy = [
    'Sort By Most Recent',
    'Recent Collections',
    'A-Z',
    'Z-A',
    'Price ↓',
    'Price ↑',
  ];
  const AllFilter = [
    'All Filter',
    'Price',
    'Size',
    'Color',
    'Reviews',
    'Brand',
  ];

  return (
    <div className="list-view">
      <div className="dropdown-group">
        <ProductListDropdown options={Categories} />
      </div>
      <div className="dropdown-group">
        <ProductListDropdown options={SortBy} />
      </div>
      <div className="dropdown-group">
        <ProductListDropdown options={AllFilter} />
      </div>
    </div>
  );
}
export default ProductListDropDown;
