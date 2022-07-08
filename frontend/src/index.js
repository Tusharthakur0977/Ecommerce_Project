import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeContextprovider from "./theme/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextprovider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContextprovider>
  </React.StrictMode>
);
