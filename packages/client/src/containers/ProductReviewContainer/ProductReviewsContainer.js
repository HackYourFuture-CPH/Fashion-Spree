import React, { useEffect, useState } from 'react';
import { ProductReviews } from '../../components/ProductReviews/ProductReviews.component';
import { apiURL } from '../../apiURL';
import PropTypes from 'prop-types';

export const ProductReviewsContainer = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    const fetchReviewsByProductId = async () => {
      const response = await fetch(`${apiURL()}/reviews?productId=${id}`);
      const reviewsData = await response.json();

      /* eslint-disable no-console */
      console.log(reviewsData);

      if (typeof reviewsData === 'string') {
        setIsEmpty(true);
      } else {
        setReviews(reviewsData);
        setIsEmpty(false);
      }
    };

    fetchReviewsByProductId();
  }, [id]);

  return (
    <div>
      {isEmpty ? 'No reviews' : <ProductReviews AllReviews={reviews} />}
      {/* This is a very temporary solution, we need to change endpoint to be more useful. Error message must have the same shape as a response with data  */}
    </div>
  );
};

ProductReviewsContainer.propTypes = {
  id: PropTypes.string.isRequired,
};
