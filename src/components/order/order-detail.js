import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { OrdersContext } from "../../store/orders-context";
import { useContext, useState, useEffect } from "react";

function OrderDetail() {
    const { id } = useParams();
    const { orders } = useContext(OrdersContext);

    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    const user = {
        id: 1,
        name: "John Doe",
        role: 'admin'
    };

    useEffect(() => {
        setOrder(orders.find((order) => +order.id === +id));
        setLoading(false);
    }, [ orders, id]);

    if (loading) {
        return <p>Loading...</p>;
    } 
    
    return (
        <div className="order-detail">
            <h2 className="order-detail-title">Order Details for Order #{order?.order_number}</h2>

            <div className="order-detail-content-container">
                <div className="order-detail-item-wrapper">
                    <div className="order-detail-item-label">Customer</div>
                    <Link to={`/user/${order.customer_id}`} className="order-detail-item detail-item-link">{order.company_name}</Link>
                </div>

                <div className="order-detail-item-wrapper">
                    <div className="order-detail-item-label">PO Number</div>
                    <div className="order-detail-item">{order.po_number}</div>
                </div>

                <div className="order-detail-item-wrapper">
                    <div className="order-detail-item-label">Order Number</div>
                    <div className="order-detail-item">{order.order_number}</div>
                </div>

                <div className="order-detail-item-wrapper">
                    <div className="order-detail-item-label">Ordered Date</div>
                    <div className="order-detail-item">{order.ordered_date}</div>
                </div>

                <div className="order-detail-item-wrapper">
                    <div className="order-detail-item-label">Delivery Date</div>
                    <div className="order-detail-item">{order.delivery_date}</div>
                </div>

                <div className="order-detail-item-wrapper">
                    <div className="order-detail-item-label">Product</div>
                    <div className="order-detail-item">{order.product}</div>
                </div>

                <div className="order-detail-item-wrapper">
                    <div className="order-detail-item-label">Quantity</div>
                    <div className="order-detail-item">{order.quantity}</div>
                </div>

                <div className="order-detail-item-wrapper">
                    <div className="order-detail-item-label">Destination</div>
                    <div className="order-detail-item">{order.destination}</div>
                </div>

                <div className="order-detail-item-wrapper">
                    <div className="order-detail-item-label">Order Status</div>
                    <div className="order-detail-item">{order.order_status}</div>
                </div>

                <div className="order-detail-item-wrapper">
                    <div className="order-detail-item-label">Ship Date</div>
                    <div className="order-detail-item">{order.ship_date}</div>
                </div>

                <div className="order-detail-item-wrapper">
                    <div className="order-detail-item-label">Last Location</div>
                    <div className="order-detail-item">{order.last_location}</div>
                </div>
            </div>

            <div className="order-detail-actions-container">
                <Link to="/" className="order-detail-btn order-detail-back-button">Back to Home</Link>
                {user?.role === "admin" && <Link to={`/order/${order.id}/edit`} className="order-detail-btn order-detail-edit-button">Edit Order</Link>}
            </div>
        </div>
    );
}

export default OrderDetail;