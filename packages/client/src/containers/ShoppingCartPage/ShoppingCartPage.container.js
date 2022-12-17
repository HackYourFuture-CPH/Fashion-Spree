import React, { useState, useEffect } from 'react';
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
  const [products, setProducts] = useState([
    {
      id: 1,
      description: 'Low waist Jeans',
      amount: 199.99,
      quantity: 1,
      selected: false,
    },
    {
      id: 2,
      description: 'High waist Jeans',
      amount: 199.99,
      quantity: 1,
      selected: false,
    },
    {
      id: 3,
      description: 'Slim fit Jeans',
      amount: 199.99,
      quantity: 1,
      selected: false,
    },
  ]);

  const productSum = products.filter((row) => row.selected).length;

  const [subtotal, setSubtotal] = useState(0);
  const delivery = 0;
  const shipping = 0;
  const total = 0;

  useEffect(() => {
    const sum = products
      .filter((row) => row.selected)
      .reduce((value, row) => {
        return value + row.amount * row.quantity;
      }, 0);
    setSubtotal(sum);
  }, [products]);

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
          <CartTable products={products} setProducts={setProducts} />
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
