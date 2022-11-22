import React from 'react';
import PropTypes from 'prop-types';
import './ProductContainer.styles.css';

export const ProductContainer = ({ children }) => {
  return <div className="container">{children}</div>;
};

ProductContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
