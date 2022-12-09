import React from 'react';
import PropTypes from 'prop-types';
import './ProductViewReviewsWrapper.styles.css';

export const ProductViewReviewsWrapper = ({ children }) => {
  return <div className="product-view-reviews-wrapper">{children}</div>;
};

ProductViewReviewsWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
