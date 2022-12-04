import React, { useState } from 'react';
import ProductList from '../../components/ProductList/ProductList.component';
import DropDownViewList from '../../components/ProductListDropDown/DropDownViewList/DropDownViewList.component';

export const CollectionsPage = () => {
  const [category, setCategory] = useState('');
  return (
    <div>
      <DropDownViewList
        selectCategory={(categoryId) => setCategory(categoryId)}
        selectSortBy={(sortById) => setCategory(sortById)}
        selectAllFilter={(allFilterId) => setCategory(allFilterId)}
      />
      <ProductList category={category} />
    </div>
  );
};
