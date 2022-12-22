import React, { useState, useMemo } from 'react';
import SearchInput from '../../components/SearchInput/SearchInput.component';
import { getLocalStorage, setLocalStorage } from '../../utils/storageHelpers';
import ProductCard from '../../components/ProductCard/ProductCard.component';
import './FavoritesPage.style.css';

export const FavoritesPage = () => {
  const favoriteProductsStorageKey = 'favorite_products';

  const [favoriteProducts, setFavoriteProducts] = useState(
    getLocalStorage(favoriteProductsStorageKey) || [],
  );
  const [searchInput, setSearchInput] = useState('');

  const toggleFavorite = (id, title, price, event) => {
    const filteredFavorite = favoriteProducts.filter((item) => item.id !== id);
    setFavoriteProducts(filteredFavorite);
    setLocalStorage(favoriteProductsStorageKey, filteredFavorite);
  };

  const filteredProducts = useMemo(() => {
    const trimmedKeyword = searchInput.trim();
    if (trimmedKeyword.length === 0) return favoriteProducts;

    return favoriteProducts.filter((product) => {
      return product.title.toLowerCase().includes(trimmedKeyword.toLowerCase());
    });
  }, [favoriteProducts, searchInput]);

  const ListOfFavoriteProducts = filteredProducts.map((product) => {
    return (
      <div key={product.id} className="product">
        <ProductCard
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
    <div className="favorite-list-view">
      <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
      <h2 className="my-favorites">My favorites</h2>
      {filteredProducts.length === 0 ? (
        <p>You have no favorite products</p>
      ) : (
        <div className="rendered-product">{ListOfFavoriteProducts}</div>
      )}
    </div>
  );
};
