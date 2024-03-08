import { Link, useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import {OrdersContext} from "../../store/orders-context";
import OrderForm from "./order-form";

function EditOrder() {
    const { id } = useParams();
    const { orders, removeOrder } = useContext(OrdersContext);

    const navigate = useNavigate();

    const [order, setOrder] = useState(null);

    const user = {
        id: 1,
        name: "John Doe",
        role: 'admin'
    };

    useEffect(() => {
        setOrder(orders.find((order) => +order.id === +id));
    }, [orders, id]);
    
    const deleteOrderHandler = () => {
        removeOrder(order.id);
        navigate('/');
    };

    return (
        <div className="order-container">
            <h1 className="order-title">Edit Order</h1>
            
            {order && <OrderForm order={order} user={user} />}

            <div className="order-actions-wrapper">
                {user?.role === 'admin' && <p className="order-action-button order-action-button-delete" onClick={deleteOrderHandler}>Delete Order</p>}
                <Link to='/' className="order-action-button order-action-button-back">Back to Home</Link>
            </div>
        </div>
    );
}

export default EditOrder;
