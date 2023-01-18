import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { ProductPropType } from '../../ProductPropType';
import { useUserContext } from '../../userContext';
import Modal from '../Modal/Modal.component';
import ProductCard from '../ProductCard/ProductCard.component';
import './ProductList.component.css';

export default function ProductList({
  isLoading,
  products,
  filteredProducts,
  addFavorite,
}) {
  const [openModal, setOpenModal] = useState();
  const toggleModal = () => {
    setOpenModal(false);
  };
  const { user } = useUserContext();

  const ListOfProducts = filteredProducts.map((product) => {
    return (
      <div className="product" key={product.id}>
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price}
          id={product.id}
          imageUrl={product.imageUrl}
          favoritesID={product.favoritesID}
          isFavorite={product.favoritesID !== null}
          addFavorite={addFavorite}
          setOpenModal={setOpenModal}
        />
      </div>
    );
  });

  return (
    <div className="product-list-container">
      {/* <button onClick={() => setOpenModal(true)} type="button">
        hhhhhhhh
      </button> */}
      {isLoading && <p>Loading...</p>}
      {products.length === 0 || filteredProducts.length === 0 ? (
        <p>There is no product available</p>
      ) : (
        <div className="rendered-product">{ListOfProducts}</div>
      )}
      <Modal
        title="Please log in to add an item to your favourites!"
        open={!user ? openModal : null}
        toggle={toggleModal}
      />
    </div>
  );
}
ProductList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(ProductPropType).isRequired,
  filteredProducts: PropTypes.arrayOf(ProductPropType).isRequired,
  addFavorite: PropTypes.func,
};
ProductList.defaultProps = {
  addFavorite: null,
};
