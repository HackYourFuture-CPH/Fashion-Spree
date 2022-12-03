import React from 'react';
import PropTypes from 'prop-types';

export default function CartCount({ productSum }) {
  return (
    <div className="">
      <span>Cart ({productSum})</span>
    </div>
  );
}

CartCount.propTypes = {
  productSum: PropTypes.number.isRequired,
};
