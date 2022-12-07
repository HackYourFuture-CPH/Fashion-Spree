import React from 'react';
import ProductList from '../../components/ProductList/ProductList.component';
import DropDownViewList from '../../components/ProductListDropDown/DropDownViewList/DropDownViewList.component';

export const CollectionsPage = () => {
  return (
    <div>
      <DropDownViewList filterIcon />
      <ProductList />
    </div>
  );
};
