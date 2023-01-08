import React from 'react';
import { ViewPageButton } from '../../../components/ViewPageButton/ViewPageButton.component';
import './ProductViewButtons.styles.css';

export const ProductViewButtons = () => {
  return (
    <div className="product-view-buttons">
      <ViewPageButton label="Buy Now" backgroundColor="#F5F5F5" />
      <ViewPageButton label="Add to Cart" backgroundColor="#D9D9D9" />
      <ViewPageButton label="Add to Favorites" backgroundColor="#D9D9D9" />
    </div>
  );
};
