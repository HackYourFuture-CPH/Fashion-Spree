import React from 'react';
import PropTypes from 'prop-types';
import './ProductViewDescription.styles.css';

export const ProductViewDescription = ({ children }) => {
  return <div className="product-view-description">{children}</div>;
};

ProductViewDescription.propTypes = {
  children: PropTypes.node.isRequired,
};
