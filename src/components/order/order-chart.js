
import OrderChartItem from "./order-chart-item";
import OrderChartHeader from "./order-chart-header";

function OrderChart({ orders }) {
    return (
        <div className="order-chart">
            <OrderChartHeader />
            {orders.map((order) => (
                <OrderChartItem key={order.id} order={order} />
            ))}
        </div>
    );
}

export default OrderChart;