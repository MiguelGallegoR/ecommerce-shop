import React from 'react'
import ReactDOM from 'react-dom/client'
import App, {loader as rootLoader} from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  useParams
} from "react-router-dom";
import './index.css'
import ErrorPage from './routes/errorPage.jsx';
import ListOfProducts from './routes/ListOfProducts.jsx';
import Product from './routes/product.jsx';
import { Gender } from './routes/gender.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "products/",
        element: <ListOfProducts />
      },
      {
        path: "products/:productId",
        element: <Product />
      },
      {
        path: "gender/:gender",
        element: <Gender/>
      },
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
