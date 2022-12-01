import React from 'react';
import { ViewCartSelectedItems } from '../../components/ViewCartSelectedItems/SelectedItemsCartList/ViewCartSelectedItems';
import './ViewCartProductList.styles.css';

export const ViewCartProductList = () => {
  const product1 = ['low waist jeans', 199.99, 1, 199.99];
  const product2 = ['high waist jeans', 199.99, 1, 199.99];
  const product3 = ['slim fitted  jeans', 199.99, 1, 199.99];

  return (
    <div className="view-cart-product-list">
      <div className="cart-item">
        <ViewCartSelectedItems product={product1} label="Product1" />
      </div>
      <div className="cart-item">
        <ViewCartSelectedItems product={product2} label="Product2" />
      </div>
      <div className="cart-item">
        <ViewCartSelectedItems product={product3} label="Product3" />
      </div>
    </div>
  );
};
