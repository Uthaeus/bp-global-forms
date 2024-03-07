import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./root-layout";
import Home from "./pages/home";
import NewOrder from "./components/orders/new-order";

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
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
