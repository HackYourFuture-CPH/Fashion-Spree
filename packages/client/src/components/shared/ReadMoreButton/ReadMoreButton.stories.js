import React from 'react';
import { ReadMoreButton } from './ReadMoreButton.component';

export default {
  title: 'Shared/ReadMoreButton',
  component: ReadMoreButton.component,
  argTypes: { onClick: { action: 'Change text volume' } },
};

const Template = (args) => <ReadMoreButton {...args} />;

export const ReadMore = Template.bind({});
ReadMore.args = {
  text: 'Read more',
  label: 'ProductDescription',
};

export const ReadLess = Template.bind({});
ReadLess.args = {
  text: 'Read less',
  label: 'ProductDescription',
};
