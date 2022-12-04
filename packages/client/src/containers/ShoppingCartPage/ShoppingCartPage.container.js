import React from 'react';
import './ShoppingCartPage.styles.css';
import CartContainer from '../../components/Cart/CartContainer/CartContainer.component';
import CartCount from '../../components/Cart/CartCount/CartCount.component';
import CartTable from '../../components/Cart/CartTable/CartTable.component';
import CartTotal from '../../components/Cart/CartTotal/CartTotal.component';
import CartButtons from '../../components/Cart/CartButtons/CartButtons.component';
import { GoBackButton } from '../../components/shared/GoBackButton/GoBackButton.component';
import { useNavigate } from 'react-router-dom';

export const ShoppingCartPage = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      description: 'Low waist Jeans',
      amount: 199.99,
      quantity: 1,
    },
    {
      id: 2,
      description: 'High waist Jeans',
      amount: 199.99,
      quantity: 1,
    },
    {
      id: 3,
      description: 'Slim fit Jeans',
      amount: 199.99,
      quantity: 1,
    },
  ];

  const productSum = products.length;

  const subtotal = 599.97;
  const delivery = 0;
  const shipping = 0;
  const total = 599.97;

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="shopping-cart-page">
      <div className="shopping-cart-container">
        <div className="shopping-cart-page-back">
          <GoBackButton text="Back to search results" onClick={navigateBack} />
        </div>
        <CartCount productSum={productSum} />
        <CartContainer>
          <CartTable products={products} />
          <CartTotal
            subtotal={subtotal}
            delivery={delivery}
            shipping={shipping}
            total={total}
          />
          <CartButtons />
        </CartContainer>
      </div>
      <div className="shopping-cart-blank">&nbsp;</div>
    </div>
  );
};
