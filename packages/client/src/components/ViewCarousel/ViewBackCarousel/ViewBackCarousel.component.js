import React from 'react';
import PropTypes from 'prop-types';
import backArrow from '../../../assets/vectors/back-arrow.svg';
import './ViewBackCarousel.styles.css';

export const ViewBackCarousel = ({ onClick }) => {
  return (
    <button
      className="view-back-carousel-arrow"
      type="button"
      onClick={onClick}
    >
      <img src={backArrow} alt="arrow" />
    </button>
  );
};

ViewBackCarousel.propTypes = {
  onClick: PropTypes.func.isRequired,
};
