import React from 'react';
import topSide from './images/Picture2.png';
import bigImage from './images/Picture1.png';
import middleSide from './images/Picture3.png';
import bottomSide from './images/Picture4.png';
import ProductImage from './ProductImage.component.js';

export default {
  title: 'ProductImage/ProductImage',
  component: ProductImage,
};

export const imageTemplate = () => (
  <ProductImage
    topSide={topSide}
    middleSide={middleSide}
    bottomSide={bottomSide}
    bigImage={bigImage}
  />
);
