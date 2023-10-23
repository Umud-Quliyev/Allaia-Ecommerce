import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product_Details from "./components/Products_Details/Product_Details.jsx";
import Products from "./components/Products/Products.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contacts />} />
        <Route
          path="/product_detail/:productId"
          element={<Product_Details />}
        />
      </Routes>
    </BrowserRouter>
  </Provider>
);
