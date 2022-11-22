import React from 'react';
import { GoBackButton } from './GoBackButton.component';

export default {
  title: 'Shared/GoBackButton',
  component: GoBackButton.component,
  argTypes: { onClick: { action: 'Go to the previous page' } },
};

const Template = (args) => <GoBackButton {...args} />;

export const GoBackToSearch = Template.bind({});
GoBackToSearch.args = {
  text: 'Back to search results',
  label: 'GoBackButton',
};
