
export const Users = [
    {
        id: 1, 
        name: "John",
        email: "john@test.com",
        role: "admin",
        password: "123456",
        accountNumber: "123456789",
        orders: [
            {
                id: 1,
                orderDate: "2022-01-01",
                
            },
            {
                id: 2,
                date: "2022-02-01",
                amount: 200
            }
        ]
    },
    {
        id: 2, 
        name: "Jane",
        email: "jane@test.com",
        role: "user",
        password: "123456",
        accountNumber: "223456789"
    },
    {
        id: 3, 
        name: "Jim",
        email: "jim@test.com",
        role: "user",
        password: "123456",
        accountNumber: "323456789"
    },
    {
        id: 4, 
        name: "Jill",
        email: "jill@test.com",
        role: "admin",
        password: "123456",
        accountNumber: "423456789"
    },
]

export const Orders = [
    {
        id: 1,
        company_name: "Company 1",
        customer_id: 1,
        po_number: "PO123",
        order_number: "ORD123",
        created_at: "2022-01-01",
        ordered_date: "2022-01-01",
        delivery_date: "2022-01-02",
        product: "Product 1",
        quantity: 10,
        destination: "Destination 1",
        carrier: "Carrier 1",
        origin: "Origin 1",
        order_status: "ordered",
        ship_date: "2022-01-03",
        last_location: "Last Location 1"
    },
    {
        id: 2,
        company_name: "Company 2",
        customer_id: 2,
        po_number: "PO456",
        order_number: "ORD456",
        created_at: "2022-02-01",
        ordered_date: "2022-02-01",
        delivery_date: "2022-02-02",
        product: "Product 2",
        quantity: 20,
        destination: "Destination 2",
        carrier: "Carrier 2",
        origin: "Origin 2",
        order_status: "shipped",
        ship_date: "2022-02-03",
        last_location: "Last Location 2"
    },
    {
        id: 3,
        company_name: "Company 3",
        customer_id: 3,
        po_number: "PO789",
        order_number: "ORD789",
        created_at: "2022-03-01",
        ordered_date: "2022-03-01",
        delivery_date: "2022-03-02",
        product: "Product 3",
        quantity: 30,
        destination: "Destination 3",
        carrier: "Carrier 3",
        origin: "Origin 3",
        order_status: "shipped",
        ship_date: "2022-03-03",
        last_location: "Last Location 3"
    },
    {
        id: 4,
        company_name: "Company 1",
        customer_id: 1,
        po_number: "PO101",
        order_number: "ORD101",
        created_at: "2022-04-01",
        ordered_date: "2022-04-01",
        delivery_date: "2022-04-02",
        product: "Product 4",
        quantity: 40,
        destination: "Destination 4",
        carrier: "Carrier 4",
        origin: "Origin 4",
        order_status: "delivered",
        ship_date: "2022-04-03",
        last_location: "Last Location 4"
    },
    {
        id: 5,
        company_name: "Company 2",
        customer_id: 2,
        po_number: "PO202",
        order_number: "ORD202",
        created_at: "2022-02-01",
        ordered_date: "2022-02-01",
        delivery_date: "2022-05-02",
        product: "Product 1",
        quantity: 50,
        destination: "Destination 5",
        carrier: "Carrier 5",
        origin: "Origin 5",
        order_status: "shipped",
        ship_date: "2022-03-03",
        last_location: "Last Location 5"
    },
    {
        id: 6,
        company_name: "Company 3",
        customer_id: 3,
        po_number: "PO303",
        order_number: "ORD303",
        created_at: "2022-03-01",
        ordered_date: "2022-03-01",
        delivery_date: "2022-06-02",
        product: "Product 2",
        quantity: 60,
        destination: "Destination 6",
        carrier: "Carrier 6",
        origin: "Origin 6",
        order_status: "shipped",
        ship_date: "2022-03-03",
        last_location: "Last Location 6"
    }
]