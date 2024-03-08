import { Link, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import {OrdersContext} from "../../store/orders-context";
import OrderForm from "./order-form";

function EditOrder() {
    const { id } = useParams();
    const { orders } = useContext(OrdersContext);

    const [order, setOrder] = useState(null);

    const user = {
        id: 1,
        name: "John Doe",
    };

    useEffect(() => {
        setOrder(orders.find((order) => +order.id === +id));
    }, [orders, id]);

    return (
        <div className="order-container">
            <h1 className="order-title">Edit Order</h1>
            {order && <OrderForm order={order} user={user} />}
            <Link to='/' className="order-link">Back to Home</Link>
        </div>
    );
}

export default EditOrder;
