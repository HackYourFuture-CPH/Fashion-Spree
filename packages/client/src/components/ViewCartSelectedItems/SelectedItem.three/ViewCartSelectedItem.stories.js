import React from 'react';
import { ViewCartSelectedItem3 } from './ViewCartSelectedItem3';

export default {
  title: 'ViewCartProducts/Product',
  component: ViewCartSelectedItem3.component,
};

const Template = (args) => <ViewCartSelectedItem3 {...args} />;

export const Third = Template.bind({});
Third.args = {
  label: 'slim fit jeans',
};
