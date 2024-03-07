
function OrderChartHeader() {
    return (
        <div className="order-chart-header">
            <div className="order-chart-header-item">Customer</div>
            <div className="order-chart-header-item">PO Number</div>
            <div className="order-chart-header-item">Ordered Date</div>
            <div className="order-chart-header-item">Product</div>
            <div className="order-chart-header-item">Quantity</div>
            <div className="order-chart-header-item">Destination</div>
            <div className="order-chart-header-item">Order Status</div>
        </div>
    );
}

export default OrderChartHeader;

// customer_id: data.user,
// company_name: data.companyName,
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