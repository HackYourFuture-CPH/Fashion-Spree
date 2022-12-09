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

export const DisplayReviews = ({ review }) => {
  const [extended, setExtended] = useState(false);

  const expandButtonHandler = () => {
    setExtended(!extended);
  };

  return (
    <div className="display-reviews-wrapper">
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
        <div className="review-description">
          {extended ? (
            <p>{review.description}</p>
          ) : (
            <p>{reduce(review.description)}</p>
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
  review: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
