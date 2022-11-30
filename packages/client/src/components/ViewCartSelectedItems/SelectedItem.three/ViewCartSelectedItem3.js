import React from 'react';
import './ViewCartSelectedItem.styles.css';
import PropTypes from 'prop-types';

export const ViewCartSelectedItem3 = ({ label }) => {
  return (
    <div className="item-info-three">
      <input type="checkbox" id="product2" name="Jeans" value={label} />
      <label htmlFor="product">Slim fit Jeans</label>
      <label htmlFor="price"> Dkk 199,99</label>
      <label htmlFor="Quantity"> 1</label>
      <label htmlFor="total"> Dkk 199,99</label>
    </div>
  );
};
ViewCartSelectedItem3.propTypes = {
  label: PropTypes.string.isRequired,
};
