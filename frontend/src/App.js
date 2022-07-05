import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/header/Header.js";
import WebFont from "webfontloader";
import Footer from "./components/Layout/footer/Footer";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
