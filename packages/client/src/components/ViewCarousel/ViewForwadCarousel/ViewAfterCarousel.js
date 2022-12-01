import React from 'react';
import PropTypes from 'prop-types';
import expandArrow from '../../../assets/vectors/expand-arrow.svg';
import './ViewAfterCarousel.styles.css';

export const ViewAfterCarousel = ({ text, onClick }) => {
  return (
    <button className="read-more-button" type="button" onClick={onClick}>
      <span>{text}</span>
      <img src={expandArrow} alt="arrow" />
    </button>
  );
};

ViewAfterCarousel.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
