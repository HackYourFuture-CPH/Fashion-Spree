import React, { useEffect, useState } from 'react';
import ViewDropdown from '../../components/ViewDropDown/ViewDropdown.component';
import { apiURL } from '../../apiURL';
import PropTypes from 'prop-types';
import './DropdownGroup.Style.css';

export const DropdownGroup = ({ productId }) => {
  const [variants, setVariants] = useState([]);
  const colors = [];
  const sizes = [];
  const quantities = [];

  useEffect(() => {
    const fetchVariantsByProductId = async () => {
      const response = await fetch(`${apiURL()}/variants?product=${productId}`);
      const variantsProductData = await response.json();
      setVariants(variantsProductData);
    };

    fetchVariantsByProductId();
  }, [productId, variants]);

  variants.forEach((variant) => {
    if (!colors.includes(variant.color)) {
      colors.push(variant.color);
    }
    if (!sizes.includes(variant.size)) {
      sizes.push(variant.size);
    }
    if (!quantities.includes(variant.stock)) {
      quantities.push(variant.stock);
    }
  });

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
