import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronRight } from 'react-icons/fa';
import './ChangeableButton.styles.css';

export const ChangeableButton = ({ text, onClick }) => {
  return (
    <button className="changeable-button" type="button" onClick={onClick}>
      <span>{text}</span>
      <FaChevronRight />
    </button>
  );
};

ChangeableButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
