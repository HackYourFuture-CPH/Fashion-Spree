import React from 'react';
import PropTypes from 'prop-types';
import backArrow from '../../../assets/vectors/back-arrow.svg';
import './GoBackButton.styles.css';

export const GoBackButton = ({ text, onClick }) => {
  return (
    <button className="go-back-button" type="button" onClick={onClick}>
      <img src={backArrow} alt="arrow" />
      <span>{text}</span>
    </button>
  );
};

GoBackButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
