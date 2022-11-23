import React from 'react';
import { ViewPageButton } from './ViewPageButton.component';

export default {
  title: 'ViewPage/Button',
  component: ViewPageButton.component,
};

const Template = (args) => <ViewPageButton {...args} />;

export const BuyNow = Template.bind({});
BuyNow.args = {
  label: 'Buy Now',
  backgroundColor: '#F5F5F5',
};

export const AddToCart = Template.bind({});
AddToCart.args = {
  label: 'Add to Cart',
  backgroundColor: '#D9D9D9',
};
