import React from 'react';

import PropTypes from 'prop-types';

export const ViewCartProducts = ({ label }) => {
  return (
    <div className="Cart-products">
      <span>Cart(3)</span>
    </div>
  );
};
ViewCartProducts.propTypes = {
  label: PropTypes.string.isRequired,
};
