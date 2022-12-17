import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DisplayReviews } from './DisplayReviews/DisplayReviews.component';
import './ProductReviews.styles.css';
import Modal from '../Modal/Modal.component';

export const ProductReviews = ({ AllReviews }) => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(false);
    document.body.style.overflow = 'visible';
  };

  return (
    <div className="product-reviews-wrapper">
      <h1 onClick={() => setOpenModal(true)} role="presentation">
        Reviews ({AllReviews.length})
      </h1>

      <DisplayReviews review={AllReviews[0]} />

      <Modal title="Reviews" open={openModal} toggle={toggleModal}>
        {AllReviews.map((review) => {
          return <DisplayReviews key={review.id} review={review} />;
        })}
      </Modal>
    </div>
  );
};

ProductReviews.propTypes = {
  AllReviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      full_name: PropTypes.string,
      review_text: PropTypes.string,
      created_at: PropTypes.string,
      rating: PropTypes.string,
    }),
  ).isRequired,
};
