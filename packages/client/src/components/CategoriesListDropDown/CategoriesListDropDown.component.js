import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CategoriesListDropDown.style.css';

const DropDownView = ({ options, lable, select, showFilterIcon, ...props }) => {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
    select(event.target.value);
  };
  const optionList =
    options.length > 0 &&
    options.map((item, index) => {
      return (
        <option key={index.id} value={item}>
          {item}
        </option>
      );
    });

  return (
    <select
      className="view-dropdown-select"
      onChange={handleChange}
      value={value}
      showFilterIcon={showFilterIcon}
      className={`view-dropdown-select ${showFilterIcon ? 'all-filters' : ''}`}
    >
      <option selected disabled>
        {lable}
      </option>
      {optionList}
    </select>
  );
};

DropDownView.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  lable: PropTypes.string.isRequired,
  select: PropTypes.string.isRequired,
  showFilterIcon: PropTypes.string.isRequired,
};

export default DropDownView;
