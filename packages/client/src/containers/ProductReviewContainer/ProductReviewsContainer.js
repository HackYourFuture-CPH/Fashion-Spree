import React, { useEffect, useState } from 'react';
import { ProductReviews } from '../../components/ProductReviews/ProductReviews.component';
import { apiURL } from '../../apiURL';
import PropTypes from 'prop-types';

export const ProductReviewsContainer = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const fetchReviewsByProductId = async () => {
      const response = await fetch(`${apiURL()}/reviews?productId=4`);
      const reviewsData = await response.json();
      if (typeof reviewsData === 'string') {
        setIsEmpty(true);
      } else {
        setReviews(reviewsData);
      }
    };

    fetchReviewsByProductId();
  }, []);

  return (
    <div>
      <ProductReviews AllReviews={reviews} />
    </div>
  );
};

ProductReviewsContainer.propTypes = {
  id: PropTypes.string.isRequired,
};
