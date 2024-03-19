import { Link } from "react-router-dom";

import OrderForm from "./order-form";

function NewOrder() {

    return (
        <div className="order-container">
            <h1 className="order-title">New Order</h1>
            
            <OrderForm />

            <div className="order-actions-wrapper">
                <Link to='/' className="order-action-button order-action-button-back">Back to Home</Link>
            </div>
        </div>
    );
}

export default NewOrder;