import React, { useState } from 'react';
import './ShoppingCartPage.styles.css';
import CartContainer from '../../components/Cart/CartContainer/CartContainer.component';
import CartCount from '../../components/Cart/CartCount/CartCount.component';
import CartTable from '../../components/Cart/CartTable/CartTable.component';
import CartTotal from '../../components/Cart/CartTotal/CartTotal.component';
import CartButtons from '../../components/Cart/CartButtons/CartButtons.component';
import { GoBackButton } from '../../components/shared/GoBackButton/GoBackButton.component';
import { useNavigate } from 'react-router-dom';
import { useShoppingCartContext } from '../../utils/ShoppingCartContext/ShoppingCartContext';

const countSubTotal = (products) => {
  return products.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0,
  );
};

export const ShoppingCartPage = () => {
  const { orderItems, productsAmount } = useShoppingCartContext();

  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const delivery = 0;
  const shipping = 0;

  const subtotal = countSubTotal(selectedProducts);

  const total = subtotal + delivery + shipping;

  const navigateBack = () => {
    navigate(-1);
  };

  const handleChange = (product) => {
    if (selectedProducts.includes(product)) {
      setSelectedProducts((prevProducts) => {
        return prevProducts.filter((selProduct) => selProduct !== product);
      });
    } else {
      setSelectedProducts((prevProducts) => {
        return [...prevProducts, product];
      });
    }
  };

  return (
    <div className="shopping-cart-page">
      <div className="shopping-cart-container">
        <div className="shopping-cart-page-back">
          <GoBackButton text="Back to search results" onClick={navigateBack} />
        </div>
        <CartCount productSum={productsAmount} />
        <CartContainer>
          <CartTable products={orderItems} handleChange={handleChange} />
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
