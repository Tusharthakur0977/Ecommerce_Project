import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ContextProvider from "./Context/Context";
import ThemeContextprovider from "./theme/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <ThemeContextprovider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeContextprovider>
    </ContextProvider>
  </React.StrictMode>
);
