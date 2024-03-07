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

    useEffect(() => {
        setOrders(Orders);
    }, [])

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
        setOrders,
        addOrder,
        removeOrder
    };

    return (
        <OrdersContext.Provider value={value}>
            {props.children}
        </OrdersContext.Provider>
    );
}

export default OrdersContextProvider