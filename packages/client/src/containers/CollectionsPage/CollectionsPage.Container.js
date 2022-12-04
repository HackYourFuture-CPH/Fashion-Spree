import React from 'react';
import ProductList from '../../components/ProductList/ProductList.component';
import DropDownViewList from '../../components/ProductListDropDown/DropDownViewList/DropDownViewList.component';
import SearchInput from '../../components/SearchInput/SearchInput.component';

export const CollectionsPage = () => {
  return (
    <div>
      <DropDownViewList />
      <SearchInput />
      <ProductList />
    </div>
  );
};
