import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DropDownView.style.css';

const DropDownView = ({ options, lable, filterIcon, ...props }) => {
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
      filterIcon={filterIcon}
      onChange={handleChange}
      className={`view-dropdown-select ${filterIcon ? 'all-filters' : ''}`}
    >
      {optionList}
    </select>
  );
};

DropDownView.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  lable: PropTypes.string.isRequired,
  filterIcon: PropTypes.string.isRequired,
};

export default DropDownView;
