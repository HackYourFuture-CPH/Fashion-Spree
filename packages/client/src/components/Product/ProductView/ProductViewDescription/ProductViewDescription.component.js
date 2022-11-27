import React from 'react';
import PropTypes from 'prop-types';
import './ProductViewDescription.styles.css';

export const ProductViewDescription = ({ children }) => {
  return <div className="container">{children}</div>;
};

ProductViewDescription.propTypes = {
  children: PropTypes.node.isRequired,
};
