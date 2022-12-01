import React, { useState } from 'react';
import './ViewCartSelectedItem.styles.css';
import PropTypes from 'prop-types';

export const ViewCartSelectedItems = ({ label, product }) => {
  const [visible, setVisible] = useState(true);

  const removeButton = () => {
    setVisible((prev) => !prev);
  };
  const productList =
    product.length > 0 &&
    product.map((item) => {
      return <product value={item}>{item}</product>;
    });

  return (
    <div className="item-info">
      <div>
        <input type="checkbox" id="product1" name="jeans" value={label} />
      </div>
      <div className="view-cart-product">{productList}</div>
      <div className="view-remove-button">
        {visible && (
          <button type="button" onClick={removeButton}>
            Remove
          </button>
        )}
      </div>
    </div>
  );
};
ViewCartSelectedItems.propTypes = {
  label: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
};
