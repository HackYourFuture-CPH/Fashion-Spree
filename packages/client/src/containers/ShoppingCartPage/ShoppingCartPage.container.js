import React, { useState, useEffect } from 'react';
import './ShoppingCartPage.styles.css';
import CartContainer from '../../components/Cart/CartContainer/CartContainer.component';
import CartCount from '../../components/Cart/CartCount/CartCount.component';
import CartTable from '../../components/Cart/CartTable/CartTable.component';
import CartTotal from '../../components/Cart/CartTotal/CartTotal.component';
import CartButtons from '../../components/Cart/CartButtons/CartButtons.component';
import { GoBackButton } from '../../components/shared/GoBackButton/GoBackButton.component';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../userContext';
import { apiURL } from '../../apiURL';

export const ShoppingCartPage = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  const delivery = 0;
  const shipping = 0;
  const total = 0;

  useEffect(() => {
    const fetchOpenedOrder = async () => {
      setIsLoading(true);
      const url = `${apiURL()}/orders`;

      const response = await fetch(url, {
        headers: {
          token: `token ${user?.uid}`,
        },
      });

      const fetchedOrdersData = await response.json();

      if (Array.isArray(fetchedOrdersData)) {
        const ordersData = fetchedOrdersData.map((order) => ({
          ...order,
          id: fetchedOrdersData.indexOf(order) + 1,
        }));
        setProducts(ordersData);
      }
    };

    fetchOpenedOrder();
    setIsLoading(false);
  }, [user]);

  const itemCount = products
    .filter((row) => row.selected)
    .reduce((accumulator, object) => {
      return accumulator + object.quantity;
    }, 0);

  useEffect(() => {
    const sum = products
      .filter((row) => row.selected)
      .reduce((value, row) => {
        return value + row.price * row.quantity;
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
        <CartCount itemCount={itemCount} />
        <CartContainer>
          <CartTable
            products={products}
            setProducts={setProducts}
            isLoading={isLoading}
          />
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
