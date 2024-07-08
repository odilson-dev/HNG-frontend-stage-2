import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Checkout from "./components/Checkout.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import MyCart from "./components/MyCarts.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import ProductListing from "./components/ProductListing.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <ProductListing />
      </App>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "productDetails",
    element: (
      <App>
        <ProductDetails />
      </App>
    ),
  },
  {
    path: "MyCart",
    element: (
      <App>
        <MyCart />
      </App>
    ),
  },
  {
    path: "Checkout",
    element: (
      <App>
        <Checkout />
      </App>
    ),
  },
]);

export default router;
