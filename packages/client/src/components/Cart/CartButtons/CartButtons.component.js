import React from 'react';
import { ViewPageButton } from '../../ViewPageButton/ViewPageButton.component';

export default function CartButtons() {
  return (
    <div>
      <ViewPageButton label="Proceed to checkout" backgroundColor="#F5F5F5" />
      <ViewPageButton label="Back to Search" backgroundColor="#D9D9D9" />
    </div>
  );
}
