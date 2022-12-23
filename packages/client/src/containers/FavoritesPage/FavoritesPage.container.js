import React, { useState, useMemo } from 'react';
import SearchInput from '../../components/SearchInput/SearchInput.component';
import { getLocalStorage, setLocalStorage } from '../../utils/storageHelpers';
import ProductCard from '../../components/ProductCard/ProductCard.component';
import './FavoritesPage.style.css';
import Modal from '../../components/Modal/Modal.component';
import { ViewPageButton } from '../../components/ViewPageButton/ViewPageButton.component';

export const FavoritesPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    // console.log('yes i have clicked');
    setOpenModal(false);
    document.body.style.overflow = 'visible';
  };
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
          openModal={openModal}
          toggleModal={toggleModal}
          toggleFavorite={toggleFavorite}
          isFavorite={favoriteProducts.some((x) => x.id === product.id)}
        />
      </div>
    );
  });

  return (
    <div className="favorite-list-view">
      <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
      <div>
        <h1 onClick={() => setOpenModal(true)} role="presentation">
          favorite Modal
        </h1>
        <Modal
          title="Are you sure you want to Remove your favorite?"
          open={openModal}
          toggle={toggleModal}
        >
          <div>
            <ViewPageButton label="Yes" backgroundColor="#00EF00" />
            <ViewPageButton label="No" backgroundColor="#FF0000" />
          </div>
        </Modal>
      </div>

      <h2 className="my-favorites">My favorites</h2>
      {filteredProducts.length === 0 ? (
        <p>You have no favorite products</p>
      ) : (
        <div className="rendered-product">{ListOfFavoriteProducts}</div>
      )}
    </div>
  );
};
