import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RatingStar from '../../../assets/vectors/sharp-star.svg';
import Reviewer from '../../../assets/Reviewer.png';
import './DisplayReviews.styles.css';

const reduce = (reviewComment) => {
  return reviewComment
    .split('.')
    .filter((_, index) => index <= 1)
    .map((sentence) => sentence.concat('.'));
};

const getDate = (rowDate) => {
  return new Date(rowDate).toDateString();
};

export const DisplayReviews = ({ review }) => {
  const [extended, setExtended] = useState(false);

  const expandButtonHandler = () => {
    setExtended(!extended);
  };

  return (
    <div className="display-reviews-wrapper">
      <div key={review.id}>
        <div className="reviewer-wrapper">
          <div className="display-reviews-image">
            <img src={Reviewer} alt="ReviewerPic" />
          </div>
          <div className="reviewer-info">
            <div className="reviewer-info-text">
              <span className="reviewer-name">{review.full_name}</span>
              <span className="review-time">{getDate(review.created_at)}</span>
            </div>
          </div>
          <div className="product-review-rating">
            <img src={RatingStar} alt="star" />
            <span>{review.rating}</span>
          </div>
        </div>
        <div className="review-description">
          {extended ? (
            <p>{review.review_text}</p>
          ) : (
            <p>{reduce(review.review_text)}</p>
          )}
        </div>
        <button
          type="button"
          className="readMore-reviews"
          onClick={expandButtonHandler}
        >
          Read more
        </button>
      </div>
    </div>
  );
};

DisplayReviews.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number,
    full_name: PropTypes.string,
    review_text: PropTypes.string,
    created_at: PropTypes.string,
    rating: PropTypes.string,
  }).isRequired,
};
