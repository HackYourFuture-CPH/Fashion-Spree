import React from 'react';
import './ShoppingCartPage.styles.css';
import CartContainer from '../../components/Cart/CartContainer/CartContainer.component';
import CartCount from '../../components/Cart/CartCount/CartCount.component';
import CartTable from '../../components/Cart/CartTable/CartTable.component';
import CartTotal from '../../components/Cart/CartTotal/CartTotal.component';
import CartButtons from '../../components/Cart/CartButtons/CartButtons.component';
import { GoBackButton } from '../../components/shared/GoBackButton/GoBackButton.component';
import { useNavigate } from 'react-router-dom';
import { useShoppingCartContext } from '../../utils/ShoppingCartContext/ShoppingCartContext';

export const ShoppingCartPage = () => {
  const { orderItems, productsAmount, delivery, shipping, total, subtotal } =
    useShoppingCartContext();
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="shopping-cart-page">
      <div className="shopping-cart-container">
        <div className="shopping-cart-page-back">
          <GoBackButton text="Back to search results" onClick={navigateBack} />
        </div>
        <CartCount productSum={productsAmount} />
        <CartContainer>
          <CartTable products={orderItems} />
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
