import React from 'react';
import PropTypes from 'prop-types';
import './ProductListDropDown.style.css';

const ProductListDropdown = ({ options, ...props }) => {
  const optionList =
    options.length > 0 &&
    options.map((item) => {
      return <option value={item}>{item}</option>;
    });

  return (
    <div>
      <select className="view-dropdown-select">{optionList}</select>
    </div>
  );
};

ProductListDropdown.propTypes = {
  options: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ProductListDropdown;
