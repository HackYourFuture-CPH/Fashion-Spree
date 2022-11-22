import React from 'react';
import { ChangeableButton } from './ChangeableButton.component';

export default {
  title: 'Shared/ChangeableButton',
  component: ChangeableButton.component,
  argTypes: { onClick: { action: 'Change text volume' } },
};

const Template = (args) => <ChangeableButton {...args} />;

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
