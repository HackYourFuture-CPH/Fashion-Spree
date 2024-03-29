import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { apiURL } from '../../apiURL';
import ProductCard from '../../components/ProductCard/ProductCard.component';
import SearchInput from '../../components/SearchInput/SearchInput.component';
import { useUserContext } from '../../userContext';
import './FavoritesPage.style.css';

import Modal from '../../components/Modal/Modal.component';
import { ViewPageButton } from '../../components/ViewPageButton/ViewPageButton.component';

export const FavoritesPage = () => {
  const { user } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [modalState, setModalState] = useState({
    modalStatus: false,
  });

  const closeModal = () => {
    setModalState({ modalStatus: false });
  };

  const [favoriteProducts, setFavoriteProducts] = useState();
  const toggleFavorite = (id) => {
    const filteredFavorite = favoriteProducts.filter((item) => item.id !== id);
    setFavoriteProducts(filteredFavorite);
  };

  const fetchFavorites = useCallback(async () => {
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
    } else {
      setFavorites([]);
    }
    setIsLoading(false);
  }, [user]);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

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
          favoriteId={product.favoritesID}
          title={product.name}
          price={product.price}
          id={product.id}
          isFavorite={filteredProducts.some((x) => x.id === product.id)}
          setModalState={setModalState}
          toggleFavorite={toggleFavorite}
          imageUrl={product.imageUrl}
        />
      </div>
    );
  });

  const handleModal = (favoritesId, id) => {
    const DeleteFavorites = async () => {
      const response = await fetch(`${apiURL()}/favorites/${favoritesId} `, {
        method: 'DELETE',
        headers: {
          token: `token ${user?.uid}`,
        },
      });

      if (response.ok) {
        fetchFavorites();
      }
    };
    DeleteFavorites(favoritesId);
    closeModal();
  };

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
      <Modal
        title="Are you sure you want to Remove your favorite?"
        open={modalState.modalStatus}
        toggle={closeModal}
      >
        <div className="fav-modal-buttons">
          <ViewPageButton
            label="Yes"
            backgroundColor="#E4C1B1"
            onClick={() => handleModal(modalState.favoritesId)}
          />
          <ViewPageButton
            label="No"
            backgroundColor="#b5b3b3"
            onClick={closeModal}
          />
        </div>
      </Modal>
    </div>
  );
};
