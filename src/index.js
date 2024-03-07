import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import OrdersContextProvider from './store/orders-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OrdersContextProvider>
      <App />
    </OrdersContextProvider>
  </React.StrictMode>
);
