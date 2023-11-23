import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./routes/errorPage.jsx";
import ListOfProducts from "./routes/ListOfProducts.jsx";
import Product from "./routes/product.jsx";
import { Gender } from "./routes/gender.jsx";
import Category from "./routes/category.jsx";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <ListOfProducts />,
      },
      {
        path: "products/:productId",
        element: <Product />,
      },
      {
        path: "/:gender",
        element: <Gender />,
      },
      {
        path: "/:gender/:category",
        element: <Category />,
      },
    ],
  },
]);

//1. Envolvemos la app con el query client provider
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
