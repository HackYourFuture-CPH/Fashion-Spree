import React from 'react';
import PropTypes from 'prop-types';
import expandArrow from '../../../../public/assets/vectors/expand-arrow.svg';
import './ReadMoreButton.styles.css';

export const ReadMoreButton = ({ text, onClick }) => {
  return (
    <button className="read-more-button" type="button" onClick={onClick}>
      <span>{text}</span>
      <img src={expandArrow} alt="arrow" />
    </button>
  );
};

ReadMoreButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
