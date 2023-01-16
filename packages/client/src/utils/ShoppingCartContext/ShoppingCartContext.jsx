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

const countAllProducts = (products) => {
  return products.reduce((acc, product) => acc + product.quantity, 0);
};

const countSubTotal = (products) => {
  return products.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0,
  );
};

const ShoppingCartProvider = ({ children }) => {
  const { user } = useUserContext();
  const [orderItems, setOrderItems] = useState([]);
  const [productsAmount, setProductsAmount] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [action, setAction] = useState(true);
  const delivery = 0;
  const shipping = 0;
  const subtotal = countSubTotal(selectedProducts);
  const total = subtotal + delivery + shipping;

  useEffect(() => {
    const fetchOrderItems = async (userUid) => {
      if (action) {
        const requestBody = {
          method: 'GET',
          headers: {
            token: `token ${userUid}`,
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(`${apiURL()}/orders`, requestBody);
        const orderItemsData = await response.json();

        if (typeof orderItemsData === 'string') return;

        setOrderItems(orderItemsData);
        setProductsAmount(countAllProducts(orderItemsData));
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

      const isSelected = selectedProducts.some(
        (item) => product.variant_id === item.variant_id,
      );

      if (typeof productData !== 'number') {
        return;
      }

      if (isSelected) {
        const leftOrderItems = orderItems.filter((item) => item !== product);
        const leftSelectedProducts = leftOrderItems.filter((item) =>
          selectedProducts.some((prod) => item.variant_id === prod.variant_id),
        );
        setSelectedProducts(leftSelectedProducts);
      }

      setAction(true);
    },
    [user, orderItems, selectedProducts],
  );

  const handleChange = useCallback(
    (product) => {
      const isSelected = selectedProducts.some(
        (item) => product.variant_id === item.variant_id,
      );
      if (isSelected) {
        setSelectedProducts((prevProducts) => {
          return prevProducts.filter(
            (selProduct) => selProduct.variant_id !== product.variant_id,
          );
        });
      } else {
        setSelectedProducts((prevProducts) => {
          return [...prevProducts, product];
        });
      }
    },
    [selectedProducts],
  );

  const orderItemsProviderValue = useMemo(
    () => ({
      orderItems,
      productsAmount,
      removeOrderItem,
      setAction,
      delivery,
      shipping,
      total,
      subtotal,
      handleChange,
    }),
    [
      orderItems,
      removeOrderItem,
      productsAmount,
      setAction,
      delivery,
      shipping,
      total,
      subtotal,
      handleChange,
    ],
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
