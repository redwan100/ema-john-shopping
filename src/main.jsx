import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inventory from './component/inventory/Inventory';
import Home from './component/layout/Home';
import Shop from './component/shop/Shop';
import Orders from './component/orders/Orders';
import Login from './component/login/Login';
import cartProductsLoader from './loaders/cartProductsLoader';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />,
    children:[
      {
        path:'/',
        element:<Shop />,
      },
      {
        path:'orders',
        element:<Orders />,
        loader:cartProductsLoader,
      },
      {
        path:'inventory',
        element:<Inventory />
      },
      {
        path:'login',
        element:<Login />
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
