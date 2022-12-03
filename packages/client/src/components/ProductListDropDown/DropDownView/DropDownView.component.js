import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DropDownView.style.css';

const DropDownView = ({ options, lable, ...props }) => {
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
      className="view-dropdown-select"
      value={value}
      onChange={handleChange}
    >
      {optionList}
    </select>
  );
};

DropDownView.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  lable: PropTypes.string.isRequired,
};

export default DropDownView;
