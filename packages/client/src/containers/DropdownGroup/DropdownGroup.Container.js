import React, { useEffect, useState } from 'react';
import ViewDropdown from '../../components/ViewDropDown/ViewDropdown.component';
import { apiURL } from '../../apiURL';
import PropTypes from 'prop-types';
import './DropdownGroup.Style.css';

export const DropdownGroup = ({ productId, showSelectedValue }) => {
  const [variants, setVariants] = useState([]);

  let colors = [];
  let sizes = [];
  let quantities = [];

  useEffect(() => {
    const fetchVariantsByProductId = async () => {
      const response = await fetch(
        `${apiURL()}/variants?product_id=${productId}`,
      );
      const variantsProductData = await response.json();
      setVariants(variantsProductData);
    };

    fetchVariantsByProductId();
  }, [productId]);

  variants.forEach((variant) => {
    colors.push(variant.color);
    sizes.push(variant.size);
    quantities.push(variant.stock);
  });

  colors = [...new Set(colors)];
  sizes = [...new Set(sizes)];
  quantities = [...new Set(quantities)];

  /* const [selectColor, setSelectColor] = useState('');
  const [selectSize, setSelectSize] = useState('');
  const [selectQuantity, setSelectQuantity] = useState(''); */

  // showSelectedValue(selectColor, selectQuantity, selectSize)
  const quantitiesDrop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const manageSelectedValue = (variantType, variantValue) => {
    showSelectedValue(variantType, variantValue);
  };

  return (
    <div className="dropdown-group-list">
      <div className="dropdown-group">
        <ViewDropdown
          options={colors}
          label="Color"
          onSelect={(color) => manageSelectedValue('color', color)}
        />
      </div>
      <div className="dropdown-group">
        <ViewDropdown
          options={sizes}
          label="Size"
          onSelect={(size) => manageSelectedValue('size', size)}
        />
      </div>
      <div className="dropdown-group">
        <ViewDropdown
          options={quantities}
          label="Quantity 11"
          onSelect={() => {}}
        />
      </div>

      <div className="dropdown-group">
        <ViewDropdown
          options={quantitiesDrop}
          label="Quantity"
          onSelect={(quantity) => manageSelectedValue('quantity', quantity)}
        />
      </div>
    </div>
  );
};

DropdownGroup.propTypes = {
  productId: PropTypes.number.isRequired,
  showSelectedValue: PropTypes.func.isRequired,
};
