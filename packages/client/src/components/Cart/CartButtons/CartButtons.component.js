import React from 'react';
import './CartButtons.styles.css';
import { ViewPageButton } from '../../ViewPageButton/ViewPageButton.component';

export default function CartButtons() {
  return (
    <div className="cart-buttons-wrapper">
      <div className="cart-buttons">
        <ViewPageButton
          label="Proceed to checkout"
          backgroundColor="#F5F5F5"
          onClick={() => {}}
        />
        <ViewPageButton
          label="Back to Search"
          backgroundColor="#D9D9D9"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}
