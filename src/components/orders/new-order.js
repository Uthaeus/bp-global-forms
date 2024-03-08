import { Link } from "react-router-dom";

import OrderForm from "./order-form";

function NewOrder() {
    const { register, handleSubmit } = useForm();

    const user = {
        id: 1,
        name: "John Doe",
    };

    return (
        <div className="order-container">
            <h1 className="order-title">New Order</h1>
            
            <OrderForm user={user} />

            <Link to='/' className="order-link">Back to Home</Link>
        </div>
    );
}

export default NewOrder;