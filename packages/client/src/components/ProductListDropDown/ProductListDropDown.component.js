import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductListDropDown.style.css';

const ProductListDropdown = ({ options, ...props }) => {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const categories = [
    'Categories',
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
  ];
  const sortBy = [
    'Sort By Most Recent',
    'Recent Collections',
    'A-Z',
    'Z-A',
    'Price ↓',
    'Price ↑',
  ];
  const allFilter = [
    'All Filter',
    'Price',
    'Size',
    'Color',
    'Reviews',
    'Brand',
  ];

  return (
    <div className="list-view">
      <div>
        <select
          className="view-dropdown-select"
          value={value}
          onChange={handleChange}
        >
          {categories.map((optionCategories) => (
            <option value={optionCategories}>{optionCategories}</option>
          ))}
        </select>
      </div>
      <div>
        <select
          className="view-dropdown-select"
          value={value}
          onChange={handleChange}
        >
          {sortBy.map((optionSortBy) => (
            <option value={optionSortBy}>{optionSortBy}</option>
          ))}
        </select>
      </div>
      <div>
        <select
          className="view-dropdown-select"
          value={value}
          onChange={handleChange}
        >
          {allFilter.map((optionAllFilter) => (
            <option value={optionAllFilter}>{optionAllFilter}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

ProductListDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductListDropdown;
