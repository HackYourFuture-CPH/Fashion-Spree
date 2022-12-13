import React from 'react';
import PropTypes from 'prop-types';
import './ProductViewImageWrapper.styles.css';

export const ProductViewImageWrapper = ({ children }) => {
  return <div className="product-view-image-wrapper">{children}</div>;
};

ProductViewImageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
