import React from 'react';
import { ProductDescription } from './ProductDescription.component';

export default {
  title: 'ProductView/ProductDescription',
  component: ProductDescription.component,
  argTypes: { extendButtonHandler: { action: 'Extend description' } },
};

const Template = (args) => <ProductDescription {...args} />;

export const ProductExample = Template.bind({});
ProductExample.args = {
  product: {
    name: 'Low Waist Jeans',
    description:
      "A vintage fit made for modern times. Our Low Pro Jeans have the same mid rise and classic straight leg silhouette from your favorite '90s denim for a perfect lived-in look. A vintage fit made for modern times. Our Low Pro Jeans have the same mid rise and classic straight leg silhouette from your favorite '90s denim for a perfect lived-in look.",
    price: 199.99,
  },
  rating: 3,
  label: 'ProductDescription',
};
