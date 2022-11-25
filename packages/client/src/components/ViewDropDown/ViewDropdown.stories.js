// Button.stories.js|jsx

import React from 'react';

import ViewDropdown from './ViewDropdown.component';

export default {
  title: 'ViewDropDown/Dropdown',
  component: ViewDropdown,
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <ViewDropdown {...args} />;

// 👇 Each story then reuses that template
export const Color = Template.bind({});
Color.args = {
  label: 'Color',
  options: ['Black', 'White', 'Blue', 'Half-white'],
};

export const Size = Template.bind({});
Size.args = {
  label: 'Size',
  options: ['Small', 'Medium', 'Large', 'XL', 'XXL'],
};

export const Quantity = Template.bind({});
Quantity.args = {
  label: 'Quantity',
  options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};
