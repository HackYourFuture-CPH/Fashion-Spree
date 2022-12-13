import React from 'react';
import PropTypes from 'prop-types';
import './ViewDropdown.styles.css';

const ViewDropdown = ({ options, label }) => {
  const optionList =
    options.length > 0 &&
    options.map((item) => {
      return <option value={item}>{item}</option>;
    });
  return (
    <div className="view-dropdown">
      <label htmlFor={label}>{label}</label>
      <div>
        <select id={label}>{optionList}</select>
      </div>
    </div>
  );
};

ViewDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ).isRequired,
  label: PropTypes.string.isRequired,
};

export default ViewDropdown;
