import PropTypes from 'prop-types';
import React from 'react';
import './ProductImage.styles.css';

function ProductImage({ topSide, middleSide, bottomSide, bigImage }) {
  return (
    <div className="product-image-wrapper">
      <div className="product-image-left-picture">
        <div>
          <img src={topSide} alt="topSide" />{' '}
        </div>
        <div>
          <img src={middleSide} alt="middleSide" />{' '}
        </div>
        <div>
          <img src={bottomSide} alt="bottomSide" />{' '}
        </div>
      </div>
      <div className="product-image-right-picture">
        <img src={bigImage} alt="bigImage" />{' '}
      </div>
    </div>
  );
}

ProductImage.propTypes = {
  topSide: PropTypes.string.isRequired,
  middleSide: PropTypes.string.isRequired,
  bottomSide: PropTypes.string.isRequired,
  bigImage: PropTypes.string.isRequired,
};

export default ProductImage;
