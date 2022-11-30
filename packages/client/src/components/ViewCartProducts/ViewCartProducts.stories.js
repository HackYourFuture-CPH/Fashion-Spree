import React from 'react';
import { ViewCartProducts } from './ViewCartProducts';

export default {
  title: 'ViewCartProducts/Product',
  component: ViewCartProducts.component,
};

const Template = (args) => <ViewCartProducts {...args} />;

export const CartItems = Template.bind({});
CartItems.args = {
  label: '',
};
