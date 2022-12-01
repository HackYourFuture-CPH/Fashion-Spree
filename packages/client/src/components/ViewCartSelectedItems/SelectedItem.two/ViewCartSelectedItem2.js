import React, { useState } from 'react';
import './ViewCartSelectedItem.styles.css';
import PropTypes from 'prop-types';

export const ViewCartSelectedItem2 = ({ label }) => {
  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className="item-info-two">
      <input type="checkbox" id="product2" name="Jeans" value={label} />
      <label htmlFor="product">High waist Jeans</label>
      <label htmlFor="price"> Dkk 199,99</label>
      <label htmlFor="Quantity"> 1</label>
      <label htmlFor="total"> Dkk 199,99</label>
      <div className="view-remove-button">
        {visible && (
          <button type="button" onClick={removeElement}>
            Remove
          </button>
        )}
      </div>
    </div>
  );
};
ViewCartSelectedItem2.propTypes = {
  label: PropTypes.string.isRequired,
};
