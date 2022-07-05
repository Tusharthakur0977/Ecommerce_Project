import React, { useState, useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/header/Header.js";
import WebFont from "webfontloader";
import Footer from "./components/Layout/footer/Footer";

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
