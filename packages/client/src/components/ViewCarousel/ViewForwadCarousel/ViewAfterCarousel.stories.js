import React from 'react';
import { ViewAfterCarousel } from './ViewAfterCarousel';

export default {
  title: 'ViewCarousel/GoAfterCarousel',
  component: ViewAfterCarousel,
  argTypes: { onClick: { action: 'shows the forwad image' } },
};

const Template = (args) => <ViewAfterCarousel {...args} />;

export const GoForwadToSearch = Template.bind({});
GoForwadToSearch.args = {};
