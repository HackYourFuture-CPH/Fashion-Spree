import React from 'react';
import './ViewCartSelectedItem.styles.css';
import PropTypes from 'prop-types';

export const ViewCartSelectedItem2 = ({ label }) => {
  return (
    <div className="item-info-two">
      <input type="checkbox" id="product2" name="Jeans" value={label} />
      <label htmlFor="product">High waist Jeans</label>
      <label htmlFor="price"> Dkk 199,99</label>
      <label htmlFor="Quantity"> 1</label>
      <label htmlFor="total"> Dkk 199,99</label>
    </div>
  );
};
ViewCartSelectedItem2.propTypes = {
  label: PropTypes.string.isRequired,
};
