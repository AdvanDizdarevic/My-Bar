import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { FavoriteContextProvider } from "./store/favorites-context";
import App from "./App";

ReactDOM.render(
  <FavoriteContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoriteContextProvider>,
  document.getElementById("root")
);
