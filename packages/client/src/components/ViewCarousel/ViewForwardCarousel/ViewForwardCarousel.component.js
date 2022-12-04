import React from 'react';
import PropTypes from 'prop-types';
import expandArrow from '../../../assets/vectors/expand-arrow.svg';
import './ViewForwardCarousel.styles.css';

export const ViewForwardCarousel = ({ onClick }) => {
  return (
    <button className="view-forward-button" type="button" onClick={onClick}>
      <img src={expandArrow} alt="arrow" />
    </button>
  );
};

ViewForwardCarousel.propTypes = {
  onClick: PropTypes.func.isRequired,
};
