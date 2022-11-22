import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductDescription.styles.css';
import { GrStar } from 'react-icons/gr';
import { ChangeableButton } from '../../shared/ExtendButton/ChangeableButton.component';

const reduce = (description) => {
  return description
    .split('.')
    .filter((_, index) => index <= 1)
    .map((sentence) => sentence.concat('.'));
};

export const ProductDescription = ({ product, rating }) => {
  const [extended, setExtended] = useState(false);

  const extendButtonHandler = () => {
    setExtended(!extended);
  };

  return (
    <div className="product-description">
      <h1>{product.name}</h1>
      <div className="product-description-numbers">
        <span>Dkk {product.price}</span>
        <div className="product-description-rating">
          <GrStar />
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
          <ChangeableButton text="Read less" onClick={extendButtonHandler} />
        ) : (
          <ChangeableButton text="Read more" onClick={extendButtonHandler} />
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
