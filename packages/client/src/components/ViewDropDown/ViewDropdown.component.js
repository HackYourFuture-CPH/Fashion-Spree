import React from 'react';
import PropTypes from 'prop-types';
import './ViewDropdown.styles.css';

const ViewDropdown = ({ options, label, onSelect, disabled }) => {
  const optionList =
    options.length > 0 &&
    options.map((item) => {
      return (
        <option key={item} value={item}>
          {item}
        </option>
      );
    });

  const handleChange = (event) => {
    onSelect(event.target.value);
  };
  return (
    <div className="view-dropdown">
      <label htmlFor={label}>{label}</label>
      <div>
        <select id={label} onChange={handleChange} disabled={disabled}>
          <option selected hidden>
            Choose {label}
          </option>
          {optionList}
        </select>
      </div>
    </div>
  );
};

ViewDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ).isRequired,
  label: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  disabled: PropTypes.string,
};

ViewDropdown.defaultProps = {
  onSelect: undefined,
  disabled: undefined,
};
export default ViewDropdown;
