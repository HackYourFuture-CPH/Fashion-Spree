import React from 'react';
import { ViewForwardCarousel } from './ViewForwardCarousel.component';

export default {
  title: 'ViewCarousel/GoForwardCarousel',
  component: ViewForwardCarousel,
  argTypes: { onClick: { action: 'shows the forward image' } },
};

const Template = (args) => <ViewForwardCarousel {...args} />;

export const GoForwardToSearch = Template.bind({});
GoForwardToSearch.args = {};
