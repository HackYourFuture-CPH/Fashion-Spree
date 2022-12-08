import React from 'react';
import PropTypes from 'prop-types';
import backArrow from '../../../assets/vectors/back-arrow.svg';
import './ViewBackCarousel.style.css';

export const ViewBackCarousel = ({ text, onClick }) => {
  return (
    <button className="go-back-Carousel" type="button" onClick={onClick}>
      <img src={backArrow} alt="arrow" />
      <span>{text}</span>
    </button>
  );
};

ViewBackCarousel.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
