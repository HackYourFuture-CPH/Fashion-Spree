import React from 'react';
import ViewDropdown from '../../components/ViewDropDown/ViewDropdown.component';
import './DropdownGroup.Style.css';

export const DropdownGroup = () => {
  const Colors = ['Black', 'White', 'Blue', 'Half-white'];
  const Sizes = ['Small', 'Medium', 'Large', 'XL', 'XXL'];
  const Quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="dropdown-list">
      <div className="dropdown-group">
        <ViewDropdown options={Colors} label="Color" />
      </div>
      <div className="dropdown-group">
        <ViewDropdown options={Sizes} label="Size" />
      </div>
      <div className="dropdown-group">
        <ViewDropdown options={Quantities} label="Quantity" />
      </div>
    </div>
  );
};
