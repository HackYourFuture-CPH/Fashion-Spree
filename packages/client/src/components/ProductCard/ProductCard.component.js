import React from 'react';
import './ProductCard.styles.css';
import CartIcon from '../../assets/cart-icon.svg';
import EmptyFavoriteIcon from '../../assets/empty-favorite-icon.svg';
import FullFavoriteIcon from '../../assets/full-favorite-icon.svg';
import StarRateIcon from '../../assets/star-rate-icon.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({
  favoriteId,
  id,
  title,
  price,
  imageUrl,
  isFavorite,
  setModalState,
  addFavorite,
  setOpenModal,
}) => {
  return (
    <div className="product-card-wrapper">
      <div className="product-img-wrapper">
        <img src={imageUrl} alt="product-Icon" className="product-img" />
        <div className="cart-favorite-wrapper">
          <img src={CartIcon} alt="Cart Icon" />
          <button
            type="button"
            className="favorite-button"
            onClick={(event) => {
              isFavorite
                ? setModalState({ modalStatus: true, favoritesId: favoriteId })
                : addFavorite(id);
              setOpenModal(true);
            }}
          >
            <img
              src={isFavorite ? FullFavoriteIcon : EmptyFavoriteIcon}
              alt="Favorite Icon"
            />
          </button>
        </div>
      </div>
      <Link className="product-title-link" to={`/products/${id}`}>
        <h2 className="product-title"> {title}</h2>
      </Link>
      <div className="price-rate-wrapper">
        <div className="product-price-wrapper">
          <p>Dkk</p>
          <p>{price}</p>
        </div>
        <div className="product-rate-wrapper">
          <img src={StarRateIcon} alt="Cart Icon" />
          <p>4.5</p>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  favoriteId: PropTypes.number,
  isFavorite: PropTypes.bool.isRequired,
  setModalState: PropTypes.func,
  addFavorite: PropTypes.func.isRequired,
  setOpenModal: PropTypes.func,
  imageUrl: PropTypes.string.isRequired,
};
ProductCard.defaultProps = {
  setOpenModal: null,
  setModalState: null,
  favoriteId: null,
};

export default ProductCard;
