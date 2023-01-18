import React from 'react';
import { Link } from 'react-router-dom';
import backArrow from '../../assets/vectors/back-arrow.svg';
import CartButtons from '../../components/Cart/CartButtons/CartButtons.component';
import CartContainer from '../../components/Cart/CartContainer/CartContainer.component';
import CartCount from '../../components/Cart/CartCount/CartCount.component';
import CartTable from '../../components/Cart/CartTable/CartTable.component';
import CartTotal from '../../components/Cart/CartTotal/CartTotal.component';
import { useShoppingCartContext } from '../../utils/ShoppingCartContext/ShoppingCartContext';
import './ShoppingCartPage.styles.css';

export const ShoppingCartPage = () => {
  const { orderItems, productsAmount, delivery, shipping, total, subtotal } =
    useShoppingCartContext();

  return (
    <div className="shopping-cart-page">
      <div className="shopping-cart-container">
        <div className="shopping-cart-page-back">
          <img src={backArrow} alt="arrow" />
          <Link to="/collections"> Back to search results</Link>
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
