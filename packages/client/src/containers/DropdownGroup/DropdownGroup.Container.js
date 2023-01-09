import React, { useEffect, useState } from 'react';
import ViewDropdown from '../../components/ViewDropDown/ViewDropdown.component';
import { apiURL } from '../../apiURL';
import PropTypes from 'prop-types';
import './DropdownGroup.Style.css';

export const DropdownGroup = ({ productId }) => {
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
      if (typeof variantsProductData !== 'string') {
        setVariants(variantsProductData);
      }
    };

    fetchVariantsByProductId();
  }, [productId, variants]);

  variants.forEach((variant) => {
    colors.push(variant.color);
    sizes.push(variant.size);
    quantities.push(variant.stock);
  });

  colors = [...new Set(colors)];
  sizes = [...new Set(sizes)];
  quantities = [...new Set(quantities)];

  return (
    <div className="dropdown-group-list">
      <div className="dropdown-group">
        <ViewDropdown options={colors} label="Color" />
      </div>
      <div className="dropdown-group">
        <ViewDropdown options={sizes} label="Size" />
      </div>
      <div className="dropdown-group">
        <ViewDropdown options={quantities} label="Quantity" />
      </div>
    </div>
  );
};

DropdownGroup.propTypes = {
  productId: PropTypes.number.isRequired,
};
