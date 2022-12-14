import React from 'react';
import DropDownView from './CategoriesListDropDown.component';

export default {
  title: 'ProductList/ProductListDropdown',
  component: DropDownView,
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <DropDownView {...args} />;

// 👇 Each story then reuses that template
export const Category = Template.bind({});
Category.args = {
  lable: 'Categorie',
  options: [
    'Categories',
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
  ],
};
export const SortBy = Template.bind({});
SortBy.args = {
  lable: 'Sort By',
  options: [
    'Sort By Most Recent',
    'Recent Collections',
    'A-Z',
    'Z-A',
    'Price ↓',
    'Price ↑',
  ],
};
export const AllFilter = Template.bind({});
AllFilter.args = {
  lable: 'All Filter',
  options: ['All Filter', 'Price', 'Size', 'Color', 'Reviews', 'Brand'],
};
