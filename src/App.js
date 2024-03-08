import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./root-layout";
import Home from "./pages/home";
import NewOrder from "./components/orders/new-order";
import OrderDetail from "./components/order/order-detail";
import UserDetail from "./components/user/user-detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/new-order",
        element: <NewOrder />,
      },
      {
        path: "/order/:id",
        element: <OrderDetail />,
      },
      {
        path: "/user/:id",
        element: <UserDetail />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
