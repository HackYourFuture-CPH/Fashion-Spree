import React from 'react';

import ViewCartPaymentDetails from './ViewCartPaymentDetails';

export default {
  title: 'ViewCartPaymentDetails/PaymentDetails',
  component: ViewCartPaymentDetails,
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <ViewCartPaymentDetails {...args} />;

// 👇 Each story then reuses that template
export const First = Template.bind({});
First.args = {};
