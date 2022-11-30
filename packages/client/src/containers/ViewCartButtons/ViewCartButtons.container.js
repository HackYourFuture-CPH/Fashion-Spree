import React from 'react';
import { ViewPageButton } from '../../components/ViewPageButton/ViewPageButton.component';
import './ViewCartButtons.styles.css';

export const ViewCartButtons = () => {
  return (
    <div className="view-cart-buttons">
      <ViewPageButton label="proceed to checkout" backgroundColor="#F5F5F5" />
      <ViewPageButton label="Back to Search" backgroundColor="#D9D9D9" />
    </div>
  );
};
