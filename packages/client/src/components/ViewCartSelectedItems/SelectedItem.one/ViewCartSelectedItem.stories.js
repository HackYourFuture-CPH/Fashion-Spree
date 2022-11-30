import React from 'react';
import { ViewCartSelectedItem1 } from './ViewCartSelectedItem1';

export default {
  title: 'ViewCartProducts/Product',
  component: ViewCartSelectedItem1.component,
};

const Template = (args) => <ViewCartSelectedItem1 {...args} />;

export const First = Template.bind({});
First.args = {
  label: 'low west jeans',
};
