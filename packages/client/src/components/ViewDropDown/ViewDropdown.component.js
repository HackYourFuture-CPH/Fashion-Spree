import React from 'react';
import PropTypes from 'prop-types';
import './ViewDropdown.styles.css';

const ViewDropdown = ({ options, label, ...props }) => {
  const optionList =
    options.length > 0 &&
    options.map((item) => {
      return (
        <option key={item} value={item}>
          {item}
        </option>
      );
    });
  return (
    <>
      <label htmlFor={label} className="view-dropdown-label">
        {label}
      </label>
      <div>
        <select id={label} className="view-dropdown-select">
          {optionList}
        </select>
      </div>
    </>
  );
};

ViewDropdown.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  label: PropTypes.string.isRequired,
};

export default ViewDropdown;
