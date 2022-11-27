import PropTypes from 'prop-types';
import React from 'react';
import './ProductImage.styles.css';

function ProductImage({ topSide, middleSide, bottomSide, bigImage }) {
  return (
    <div className="product-image-wrapper">
      <div className="left-picture">
        <div>
          <img src={topSide} alt="topSide" width="100px" />{' '}
        </div>
        <div>
          <img src={middleSide} alt="middleSide" width="100px" />{' '}
        </div>
        <div>
          <img src={bottomSide} alt="bottomSide" width="100px" />{' '}
        </div>
      </div>
      <div className="right-picture">
        <img src={bigImage} alt="bigImage" width="150px" height="300px" />{' '}
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
