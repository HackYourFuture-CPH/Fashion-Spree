import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DropDownView.style.css';

const DropDownView = ({ options, lable, extra, ...props }) => {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const optionList =
    options.length > 0 &&
    options.map((item) => {
      return <option value={item}>{item}</option>;
    });

  return (
    <select
      value={value}
      extra={extra}
      onChange={handleChange}
      className={`view-dropdown-select ${extra ? 'all-filters' : ''}`}
    >
      {optionList}
    </select>
  );
};

DropDownView.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  lable: PropTypes.string.isRequired,
  extra: PropTypes.string.isRequired,
};

export default DropDownView;
