import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ViewForwardCarousel } from '../../components/ViewCarousel/ViewForwardCarousel/ViewForwardCarousel.component';
import './ProductViewBreadcrumbs.styles.css';

export const ProductViewBreadcrumbs = ({ category }) => {
  return (
    <div className="breadcrumbs-wrapper">
      <Link to="/collections" className="collections-link">
        Our collections
      </Link>
      <ViewForwardCarousel />
      <Link to="/collections" className="category-link">
        {category}
      </Link>
    </div>
  );
};

ProductViewBreadcrumbs.propTypes = {
  category: PropTypes.string.isRequired,
};
