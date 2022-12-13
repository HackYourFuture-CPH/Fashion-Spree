import React, { useState } from 'react';
import SearchInput from '../../components/SearchInput/SearchInput.component';
import { getLocalStorage, setLocalStorage } from '../../utils/storageHelpers';
import ProductCard from '../../components/ProductCard/ProductCard.component';
import './FavoritesPage.style.css';

export const FavoritesPage = () => {
  const favoriteProductsStorageKey = 'favorite_products';

  const [favoriteProducts, setFavoriteProducts] = useState(
    getLocalStorage(favoriteProductsStorageKey) || [],
  );

  const toggleFavorite = (id, title, price, event) => {
    const newFavoriteItem = {
      id,
      title,
      price,
    };

    const filteredFavorite = favoriteProducts.filter((item) => item.id !== id);
    setFavoriteProducts(filteredFavorite);
    setLocalStorage(favoriteProductsStorageKey, filteredFavorite);
  };

  const ListOfFavoriteProducts = favoriteProducts.map((product) => {
    return (
      <div className="product">
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          id={product.id}
          toggleFavorite={toggleFavorite}
          isFavorite={favoriteProducts.some((x) => x.id === product.id)}
        />
      </div>
    );
  });

  return (
    <div className="list-view">
      <SearchInput />
      <h2 className="my-favorites">My favorites</h2>
      <div className="rendered-product">{ListOfFavoriteProducts}</div>
    </div>
  );
};
