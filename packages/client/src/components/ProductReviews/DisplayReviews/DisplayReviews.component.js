import React from 'react';
import PropTypes from 'prop-types';
import RatingStar from '../../../assets/vectors/sharp-star.svg';
import Reviewer from '../../../assets/Reviewer.png';
import './DisplayReviews.styles.css';

export const DisplayReviews = ({ reviews }) => {
  return (
    <div className="display-reviews-wrapper">
      {reviews.map((review) => (
        <div key={review.id}>
          <div className="reviewer-wrapper">
            <div>
              <img src={Reviewer} alt="ReviewerPic" />
            </div>
            <div className="reviewer-info">
              <span className="reviewer-name">{review.name}</span>
              <span className="review-time">01 December 2022 05:55PM</span>
            </div>
            <div className="product-review-rating">
              <img src={RatingStar} alt="star" />
              <span>{review.rating}</span>
            </div>
          </div>
          <div className="review-description">{review.description}</div>
        </div>
      ))}
    </div>
  );
};

DisplayReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
