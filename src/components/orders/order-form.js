import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { OrdersContext } from "../../store/orders-context";

import { Users } from "../../store/DUMMY_DATA";

function OrderForm({ order, user }) {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { addOrder } = useContext(OrdersContext);

    const [users, setUsers] = useState(Users);

    useEffect(() => {
        if (order) {
            reset(order);
        }
    }, [order, reset]);

    submitHandler = (data) => {
        console.log(data);

        const newOrder = {

        }
    };

    return (
        <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <label htmlFor="user">User*</label>
                        <select {...register("user"), { required: true }} className="form-control">
                            <option value="">Select User</option>
                            {users.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.email}
                                </option>
                            ))}
                        </select>
                        {errors.user && <p className="error-message">User is required</p>}
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="poNumber">PO Number</label>
                        <input type="text" {...register("poNumber")} className="form-control" />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="orderNumber">Order Number</label>
                        <input type="text" {...register("orderNumber")} className="form-control" />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <label htmlFor="orderedDate">Ordered Date</label>
                        <input type="date" {...register("orderedDate")} className="form-control" />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="deliveryDate">Est. Delivery Date</label>
                        <input type="date" {...register("deliveryDate")} className="form-control" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <label htmlFor="product">Product</label>
                        <input type="text" {...register("product")} className="form-control" />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="destination">Destination</label>
                        <input type="text" {...register("destination")} className="form-control" />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="carrier">Carrier</label>
                        <input type="text" {...register("carrier")} className="form-control" />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="origin">Origin</label>
                        <input type="text" {...register("origin")} className="form-control" />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="text" {...register("quantity")} className="form-control" />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="orderStatus">Order Status</label>
                        <select {...register("orderStatus")} className="form-control">
                            <option value="ordered">Ordered</option>
                            <option value="shipped">Shipped</option>
                            <option value="delivered">Delivered</option>
                        </select>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="shipDate">Ship Date</label>
                        <input type="date" {...register("shipDate")} className="form-control" />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="lastLocation">Last Location</label>
                        <input type="text" {...register("lastLocation")} className="form-control" />
                    </div>
                </div>
            </div>

            <input type="submit" value='Create Order' className="btn btn-primary" />
        </form>
    );
}

export default OrderForm;