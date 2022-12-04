import React, { useState } from 'react';
import ProductList from '../../components/ProductList/ProductList.component';
import DropDownViewList from '../../components/ProductListDropDown/DropDownViewList/DropDownViewList.component';

export const CollectionsPage = () => {
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [allFilter, setAllfilter] = useState('');
  return (
    <div>
      <DropDownViewList
        selectCategory={(categoryName) => setCategory(categoryName)}
        selectSortBy={(sortByName) => setSortBy(sortByName)}
        selectAllFilter={(allFilterName) => setAllfilter(allFilterName)}
      />
      <ProductList category={category} sortBy={sortBy} allFilter={allFilter} />
    </div>
  );
};
