import React, { useState } from 'react';
import './ViewCartSelectedItem.styles.css';
import PropTypes from 'prop-types';

export const ViewCartSelectedItem1 = ({ label }) => {
  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className="item-info">
      <input type="checkbox" id="product1" name="jeans" value={label} />
      <label htmlFor="productname"> Low waist Jeans</label>
      <label htmlFor="price"> Dkk 199,99</label>
      <label htmlFor="quantity"> 1</label>
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
ViewCartSelectedItem1.propTypes = {
  label: PropTypes.string.isRequired,
};
