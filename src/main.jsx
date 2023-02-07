import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from './Context/index';

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </CartProvider>
);
