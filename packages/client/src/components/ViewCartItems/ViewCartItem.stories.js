import React from 'react';

import ViewCartItem from './ViewCartItems';

export default {
  title: 'ViewCartItem /CartItems',
  component: ViewCartItem,
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <ViewCartItem {...args} />;

// 👇 Each story then reuses that template
export const First = Template.bind({});
First.args = {};
