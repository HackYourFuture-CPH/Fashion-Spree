import React from 'react';
import ProductList from '../../components/ProductList/ProductList.component';
import ProductListDropDown from '../ProductListDropDown/ProductListDropDown.container';

export const CollectionsPage = () => {
  return (
    <div>
      <ProductListDropDown />
      <ProductList />
    </div>
  );
};
