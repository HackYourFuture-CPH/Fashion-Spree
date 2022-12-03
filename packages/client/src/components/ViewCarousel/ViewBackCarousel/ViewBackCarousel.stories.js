import React from 'react';
import { ViewBackCarousel } from './ViewBackCarousel';

export default {
  title: 'ViewCarousel/GoBackCarousel',
  component: ViewBackCarousel,
  argTypes: { onClick: { action: 'shows the back image' } },
};

const Template = (args) => <ViewBackCarousel {...args} />;

export const GoBackToSearch = Template.bind({});
GoBackToSearch.args = {};
