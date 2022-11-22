import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductDescription.styles.css';
import sharpStar from '../../../../public/assets/vectors/sharp-star.svg';
import { ReadMoreButton } from '../../shared/ReadMoreButton/ReadMoreButton.component';

const reduce = (description) => {
  return description
    .split('.')
    .filter((_, index) => index <= 1)
    .map((sentence) => sentence.concat('.'));
};

export const ProductDescription = ({ product, rating }) => {
  const [extended, setExtended] = useState(false);

  const expandButtonHandler = () => {
    setExtended(!extended);
  };

  return (
    <div className="product-description">
      <h1>{product.name}</h1>
      <div className="product-description-numbers">
        <span>Dkk {product.price}</span>
        <div className="product-description-rating">
          <img src={sharpStar} alt="star" />
          <span>{rating}</span>
        </div>
      </div>
      <div className="product-description-info">
        <h2>Product Description</h2>
        {extended ? (
          <p>{product.description}</p>
        ) : (
          <p>{reduce(product.description)}</p>
        )}

        {extended ? (
          <ReadMoreButton text="Read less" onClick={expandButtonHandler} />
        ) : (
          <ReadMoreButton text="Read more" onClick={expandButtonHandler} />
        )}
      </div>
    </div>
  );
};

ProductDescription.propTypes = {
  product: PropTypes.exact({
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }),
  rating: PropTypes.number,
};

ProductDescription.defaultProps = {
  product: {
    name: 'Low Waist Jeans',
    description:
      "A vintage fit made for modern times. Our Low Pro Jeans have the same mid rise and classic straight leg silhouette from your favorite '90s denim for a perfect lived-in look. A vintage fit made for modern times. Our Low Pro Jeans have the same mid rise and classic straight leg silhouette from your favorite '90s denim for a perfect lived-in look.",
    price: 199.99,
  },
  rating: 4.5,
};
