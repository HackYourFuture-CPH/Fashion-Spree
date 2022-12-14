import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CategoriesListDropDown.style.css';

const DropDownView = ({
  options,
  lable,
  onSelect,
  showFilterIcon,
  ...props
}) => {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
    onSelect(event.target.value);
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
      onChange={handleChange}
      value={value}
      showFilterIcon={showFilterIcon}
      className={`view-dropdown-select ${showFilterIcon ? 'all-filters' : ''}`}
    >
      <option selected value="">
        {lable}
      </option>
      {optionList}
    </select>
  );
};

DropDownView.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  lable: PropTypes.string.isRequired,
  onSelect: PropTypes.string.isRequired,
  showFilterIcon: PropTypes.string.isRequired,
};

export default DropDownView;
