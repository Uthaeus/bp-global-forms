import { useState, createContext, useEffect } from "react";

import { Orders } from "./DUMMY_DATA";

export const OrdersContext = createContext({
  orders: [],
  setOrders: () => {},
  addOrder: () => {},
  removeOrder: () => {},
});

function OrdersContextProvider(props) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setOrders(Orders);
    setLoading(false);
  }, []);

  function addOrder(order) {
    setOrders((prevOrders) => {
      return [order, ...prevOrders];
    });
  }

  function removeOrder(id) {
    setOrders((prevOrders) => {
      return prevOrders.filter((order) => order.id !== id);
    });
  }

  const value = {
    orders,
    addOrder,
    removeOrder,
  };

  return (
    <OrdersContext.Provider value={value}>
      {!loading && props.children}
    </OrdersContext.Provider>
  );
}

export default OrdersContextProvider;
