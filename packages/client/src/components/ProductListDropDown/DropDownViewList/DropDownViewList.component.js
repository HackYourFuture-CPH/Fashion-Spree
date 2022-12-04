import React from 'react';
import DropDownView from '../DropDownView/DropDownView.component';
import './DropDownViewList.style.css';

const DropDownViewList = () => {
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
      <DropDownView lable="Categories" options={Categories} />
      <DropDownView lable="Sort By" options={SortBy} />
      <DropDownView lable="All Filter" options={AllFilter} />
    </div>
  );
};
export default DropDownViewList;
