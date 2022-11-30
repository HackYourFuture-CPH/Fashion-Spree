import React from 'react';
import { ViewCartSelectedItem2 } from './ViewCartSelectedItem2';

export default {
  title: 'ViewCartProducts/Product',
  component: ViewCartSelectedItem2.component,
};

const Template = (args) => <ViewCartSelectedItem2 {...args} />;

export const Second = Template.bind({});
Second.args = {
  label: 'low west jeans',
};
