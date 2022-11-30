import React from 'react';
import './ViewCartPaymentDetails.css';

export default function ViewCartPaymentDetails() {
  return (
    <div className="product-final-option">
      <div className="View-item-payment-titles">
        <div>Subtotal</div>
        <div>Delivery fee</div>
        <div>Shipping fee</div>
        <div>Total</div>
      </div>
      <div className="View-item-payment-details">
        <div>Dkk 599,97</div>
        <div>Free</div>
        <div>Free</div>
        <div>Dkk 599,97</div>
      </div>
    </div>
  );
}
