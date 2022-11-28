import React from 'react';
import PropTypes from 'prop-types';
import './ProductViewWrapper.styles.css';

export const ProductViewWrapper = ({ children }) => {
  return <div className="product-wrapper">{children}</div>;
};

ProductViewWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
