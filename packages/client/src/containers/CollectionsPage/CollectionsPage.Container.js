import React from 'react';
import ProductList from '../../components/ProductList/ProductList.component';
import ProductListDropDown from '../ProductListDropDown/ProductListDropDown.container';
import SearchInput from '../../components/SearchInput/SearchInput.component';

export const CollectionsPage = () => {
  return (
    <div>
      <ProductListDropDown />
      <SearchInput />
      <ProductList />
    </div>
  );
};
