import React, {
  useState,
  useContext,
  useCallback,
  createContext,
  useMemo,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { useUserContext } from '../../userContext';
import { apiURL } from '../../apiURL';

const ShoppingCartContext = createContext({});

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

const ShoppingCartProvider = ({ children }) => {
  const { user } = useUserContext();
  const [orderItems, setOrderItems] = useState([]);
  const [action, setAction] = useState(true);

  useEffect(() => {
    const fetchOrderItems = async (userUid) => {
      if (action) {
        const requestBody = {
          method: 'GET',
          headers: {
            token: `token ${user.uid}`,
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(`${apiURL()}/orders`, requestBody);
        const orderItemsData = await response.json();

        if (typeof orderItemsData === 'string') return;

        setOrderItems(orderItemsData);
        setAction(false);
      }
    };

    if (user) fetchOrderItems(user.uid);
  }, [user, action]);

  const removeOrderItem = useCallback(
    async (product) => {
      const request = {
        method: 'DELETE',
        headers: {
          authorization: `token ${user.uid}`,
        },
      };

      const response = await fetch(
        `${apiURL()}/orders?orderId=${product.order_id}&variantId=${
          product.variant_id
        }`,
        request,
      );
      const productData = await response.json();

      if (typeof productData === 'number') {
        setAction(true);
      }
    },
    [user],
  );

  const orderItemsProviderValue = useMemo(
    () => ({
      orderItems,
      removeOrderItem,
    }),
    [orderItems, removeOrderItem],
  );

  return (
    <ShoppingCartContext.Provider value={orderItemsProviderValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
