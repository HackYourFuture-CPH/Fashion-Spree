import React, { useState, useMemo, useEffect } from 'react';
import SearchInput from '../../components/SearchInput/SearchInput.component';
import ProductCard from '../../components/ProductCard/ProductCard.component';
import './FavoritesPage.style.css';
import { apiURL } from '../../apiURL';
import { useUserContext } from '../../userContext';

export const FavoritesPage = () => {
  const { user } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const fetchFavorites = async () => {
      setIsLoading(true);
      const url = `${apiURL()}/favorites`;
      const response = await fetch(url, {
        headers: {
          token: `token ${user?.uid}`,
        },
      });
      const favoritesData = await response.json();
      if (Array.isArray(favoritesData)) {
        setFavorites(favoritesData);
      }
    };

    fetchFavorites();
    setIsLoading(false);
  }, [user]);

  const filteredProducts = useMemo(() => {
    const trimmedKeyword = searchInput.trim();
    if (trimmedKeyword.length === 0) return favorites;
    return favorites.filter((product) => {
      return product.name.toLowerCase().includes(trimmedKeyword.toLowerCase());
    });
  }, [favorites, searchInput]);

  const ListOfFavoriteProducts = filteredProducts.map((product) => {
    return (
      <div key={product.id} className="product">
        <ProductCard
          title={product.name}
          price={product.price}
          id={product.id}
          isFavorite={filteredProducts.some((x) => x.id === product.id)}
        />
      </div>
    );
  });

  return (
    <div className="favorite-list-view">
      <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
      <h2 className="my-favorites">My favorites</h2>
      {isLoading ? 'Loading...' : ''}
      {!user && 'Please login'}
      {favorites.length === 0 && user ? (
        <p>You have no favorite products</p>
      ) : (
        <div className="rendered-product">{ListOfFavoriteProducts}</div>
      )}
    </div>
  );
};
