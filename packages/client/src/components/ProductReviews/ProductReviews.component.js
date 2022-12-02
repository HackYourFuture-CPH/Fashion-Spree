import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DisplayReviews } from './DisplayReviews/DisplayReviews.component';
import './ProductReviews.styles.css';

export const ProductReviews = ({ AllReviews }) => {
  const [reviews, setReviews] = useState([AllReviews[0]]);

  const handleMoreReviews = () => {
    if (reviews.length !== AllReviews.length) {
      const reviewsIndex = reviews.length;
      setReviews(reviews.concat(AllReviews[reviewsIndex]));
    }
  };

  return (
    <div className="product-reviews-wrapper">
      <h1>Reviews ({AllReviews.length})</h1>

      <DisplayReviews reviews={reviews} />

      {reviews.length !== AllReviews.length && (
        <button
          type="button"
          onClick={handleMoreReviews}
          className="readMore-reviews"
        >
          Read more
        </button>
      )}
    </div>
  );
};

ProductReviews.propTypes = {
  AllReviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      rating: PropTypes.number,
    }),
  ),
};

ProductReviews.defaultProps = {
  AllReviews: [
    {
      id: 1,
      name: 'Sophie Williams',
      description: 'Good',
      rating: 4.5,
    },

    {
      id: 2,
      name: 'Sophie Williams',
      description: 'Bad',
      rating: 0.5,
    },
  ],
};
