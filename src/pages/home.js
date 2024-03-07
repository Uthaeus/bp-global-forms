import { useContext, useEffect, useState } from "react";

import { OrdersContext } from "../store/orders-context";

import OrderChart from "../components/order/order-chart";

function Home() {
    const { orders } = useContext(OrdersContext);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [loading, setLoading] = useState(true);


    

    return (
        <div className="home">
            <div className="home-chart-container">
                <OrderChart orders={orders} />
            </div>
        </div>
    );
}

export default Home;