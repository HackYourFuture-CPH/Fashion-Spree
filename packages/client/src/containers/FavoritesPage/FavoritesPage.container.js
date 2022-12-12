import React from 'react';
import SearchInput from '../../components/SearchInput/SearchInput.component';
import { getLocalStorage, setLocalStorage } from '../../utils/storageHelpers';
import ProductCard from '../../components/ProductCard/ProductCard.component';

export const FavoritesPage = () => {
  const favoriteProductsStorageKey = 'favorite_products';
  const storageItems = getLocalStorage(favoriteProductsStorageKey);

  const ListOfFavoriteProducts = storageItems.map((product) => {
    return (
      <div className="product">
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price}
          id={product.id}
        />
      </div>
    );
  });

  return (
    <>
      <SearchInput />
      <div>{ListOfFavoriteProducts}</div>
    </>
  );
};
