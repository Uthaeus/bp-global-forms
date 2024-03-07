import { Link } from "react-router-dom";

function OrderChartItem({ order }) {
    return (
        <Link to={`/order/${order.id}`} className="order-chart-item">
            <div className="order-chart-item-item">{order.company_name}</div>
            <div className="order-chart-item-item">{order.po_number}</div>
            <div className="order-chart-item-item">{order.ordered_date}</div>
            <div className="order-chart-item-item">{order.product}</div>
            <div className="order-chart-item-item">{order.quantity}</div>
            <div className="order-chart-item-item">{order.destination}</div>
            <div className="order-chart-item-item">{order.order_status}</div>
        </Link>
    );
}

export default OrderChartItem;

// customer_id: data.user,
// po_number: data.poNumber,
// order_number: data.orderNumber,
// created_at: new Date().toISOString(),
// ordered_date: data.orderedDate,
// delivery_date: data.deliveryDate,
// product: data.product,
// quantity: data.quantity,
// destination: data.destination,
// carrier: data.carrier,
// origin: data.origin,
// order_status: data.orderStatus,
// ship_date: data.shipDate,
// last_location: data.lastLocation