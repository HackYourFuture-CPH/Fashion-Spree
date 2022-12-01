import React from 'react';
import { ViewCartSelectedItems } from './ViewCartSelectedItems';

export default {
  title: 'ViewCartProducts/Product',
  component: ViewCartSelectedItems.component,
};

const Template = (args) => <ViewCartSelectedItems {...args} />;

export const First = Template.bind({});
First.args = {
  label: 'product1',
  product: ['low waist jeans', 199.99, 1, 199.99],
};
export const Second = Template.bind({});
Second.args = {
  label: 'product2',
  product: ['high waist jeans', 199.99, 1, 199.99],
};
export const Third = Template.bind({});
Third.args = {
  label: 'product3',
  product: ['silm fit jeans', 199.99, 1, 199.99],
};
