import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Checkout from "./components/Checkout.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import MyCart from "./components/MyCarts.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import ProductListing from "./components/ProductListing.jsx";
import PaymentMethod from "./components/PaymentMethod.jsx";
import CardPayment from "./components/CardPayment.jsx";

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
    path: "product-details",
    element: (
      <App>
        <ProductDetails />
      </App>
    ),
  },
  {
    path: "mycart",
    element: (
      <App>
        <MyCart />
      </App>
    ),
  },
  {
    path: "checkout",
    element: (
      <App>
        <Checkout />
      </App>
    ),
  },
  {
    path: "payment-method",
    element: (
      <App>
        <PaymentMethod />
      </App>
    ),
  },
  {
    path: "card-payment",
    element: (
      <App>
        <CardPayment />
      </App>
    ),
  },
]);

export default router;
