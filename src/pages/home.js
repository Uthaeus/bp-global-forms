import { useContext, useEffect, useState } from "react";

import OrdersContext from "../store/orders-context";

import OrderChartHeader from "../components/order/order-chart-header";
import OrderChartItem from "../components/order/order-chart-item";

function Home() {
    const { orders } = useContext(OrdersContext);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    
    

    return (
        <div className="home">
            <div className="home-chart-container">
                <OrderChartHeader />
                {filteredOrders.map((order) => (
                    <OrderChartItem key={order.id} order={order} />
                ))}
            </div>
        </div>
    );
}

export default Home;