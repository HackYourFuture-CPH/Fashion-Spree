import React from 'react';
import ProductList from '../../components/ProductList/ProductList.component';
import ProductListDropDown from '../../components/ProductListDropDown/ProductListDropDown.component';

export const CollectionsPage = () => {
  return (
    <div>
      <ProductListDropDown />
      <ProductList />
    </div>
  );
};
