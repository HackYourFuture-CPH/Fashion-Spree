import React from 'react';
import PropTypes from 'prop-types';
import './ViewDropdown.styles.css';

const ViewDropdown = ({ options, label, ...props }) => {
  const optionList =
    options.length > 0 &&
    options.map((item) => {
      return <option value={item}>{item}</option>;
    });
  return (
    <>
      <label htmlFor={label} className="dropdown-label">
        {label}
      </label>
      <div>
        <select id={label} className="dropdown-select">
          {optionList}
        </select>
      </div>
    </>
  );
};

ViewDropdown.propTypes = {
  options: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ViewDropdown;
