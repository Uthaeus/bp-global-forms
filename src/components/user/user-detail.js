import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { OrdersContext } from "../../store/orders-context";

import OrderChart from "../order/order-chart";

const user = {
    id: 1, 
    contact_name: "John",
    company_name: "Company 1",
    contact_phone: "555-555-5555",
    email: "john@test.com",
    role: "user",
    accountNumber: "123456789",
    billing_address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    }
}

function UserDetail() {
    const [currentOrders, setCurrentOrders] = useState([]);
    const [deliveredOrders, setDeliveredOrders] = useState([]);
    const { orders } = useContext(OrdersContext);

    useEffect(() => {
        setCurrentOrders(orders.filter((order) => order.customer_id === user.id && order.order_status !== "delivered"));
        setDeliveredOrders(orders.filter((order) => order.customer_id === user.id && order.order_status === "delivered"));
    }, [orders]);

    return (
        <div className="user-detail">
            <div className="user-detail-header">
                <div className="user-detail-header-item">
                    <h2 className="user-detail-title">{user.company_name}</h2>

                    <p className="user-detail-subtitle">Email: 
                        <span className="user-detail-span">{user.email}</span>    
                    </p>

                    <p className="user-detail-subtitle">Contact Name: 
                        <span className="user-detail-span">{user.contact_name}</span>
                    </p>

                    <p className="user-detail-subtitle">Contact Phone: 
                        <span className="user-detail-span">{user.contact_phone}</span>
                    </p>
                </div>  

                <div className="user-detail-header-item">
                    <h2 className="user-detail-title">Billing Address</h2>

                    <p className="user-detail-subtitle">{user.billing_address.street}</p>
                    <p className="user-detail-subtitle">{user.billing_address.city}, {user.billing_address.state} {user.billing_address.zip}</p>
                </div>
            </div>

            <div className="user-detail-chart-container">
                <h3 className="user-detail-chart-title">Current Orders:</h3>
                <OrderChart orders={currentOrders} />
            </div>

            <div className="user-detail-chart-container">
                <h3 className="user-detail-chart-title">Delivered Orders:</h3>
                <OrderChart orders={deliveredOrders} />
            </div>

            <Link to="/" className="user-detail-back-link">Back to Home</Link>
        </div>
    );
}

export default UserDetail;