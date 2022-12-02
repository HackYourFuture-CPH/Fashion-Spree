import React from 'react';

import ProductListDropdown from './ProductListDropDown.component';

export default {
  title: 'ProductList/ProductListDropdown',
  component: ProductListDropdown,
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <ProductListDropdown {...args} />;

// 👇 Each story then reuses that template
export const Category = Template.bind({});
Category.args = {
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
  options: ['All Filter', 'Price', 'Size', 'Color', 'Reviews', 'Brand'],
};
