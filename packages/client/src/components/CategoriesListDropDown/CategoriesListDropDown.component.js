import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CategoriesListDropDown.style.css';

const DropDownView = ({
  options,
  lable,
  onSelect,
  showFilterIcon = false,
  ...props
}) => {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
    onSelect(event.target.value);
  };
  const optionList =
    options.length > 0 &&
    options.map((item) => {
      return (
        <option key={item.toString()} value={item}>
          {item}
        </option>
      );
    });

  return (
    <select
      onChange={handleChange}
      value={value}
      className={`view-dropdown-select ${showFilterIcon ? 'all-filters' : ''}`}
    >
      <option value="">{lable}</option>
      {optionList}
    </select>
  );
};

DropDownView.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  lable: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  showFilterIcon: PropTypes.bool,
};
DropDownView.defaultProps = {
  onSelect: undefined,
  showFilterIcon: false,
};

export default DropDownView;
