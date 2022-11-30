import React from 'react';

import ViewRemoveButton from './ViewRemoveButton';

export default {
  title: 'ViewRemoveButton/RemoveButton',
  component: ViewRemoveButton,
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <ViewRemoveButton {...args} />;

// 👇 Each story then reuses that template
export const First = Template.bind({});
First.args = {};
