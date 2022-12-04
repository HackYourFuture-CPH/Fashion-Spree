import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { apiURL } from '../../../apiURL';
import DropDownView from '../DropDownView/DropDownView.component';
import './DropDownViewList.style.css';

const DropDownViewList = ({
  selectCategory,
  selectSortBy,
  selectAllFilter,
}) => {
  const [categories, setCategories] = useState([]);
  const fetchProducts = () => {
    fetch(`${apiURL()}/categories/`)
      .then((res) => res.json())
      .then((item) => {
        setCategories(item);
      });
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const Categories = categories.map(
    (element) =>
      element.name.charAt(0).toUpperCase() +
      element.name.slice(1).toLowerCase(),
  );

  const SortBy = ['Recent Collections', 'A-Z', 'Z-A', 'Price ↓', 'Price ↑'];
  const AllFilter = ['Price', 'Size', 'Color', 'Reviews', 'Brand'];

  return (
    <div className="list-view">
      <DropDownView
        lable="Categories"
        options={Categories}
        select={selectCategory}
      />
      <DropDownView
        lable="Sort By Most Recent"
        options={SortBy}
        select={selectSortBy}
      />
      <DropDownView
        lable="All Filter"
        options={AllFilter}
        select={selectAllFilter}
      />
    </div>
  );
};
DropDownViewList.propTypes = {
  selectCategory: PropTypes.func.isRequired,
  selectSortBy: PropTypes.func.isRequired,
  selectAllFilter: PropTypes.func.isRequired,
};

export default DropDownViewList;
