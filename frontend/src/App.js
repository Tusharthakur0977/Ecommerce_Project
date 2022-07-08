import React, { useState, useEffect, useContext } from "react";
import Header from "./components/Layout/header/Header.js";
import WebFont from "webfontloader";
import Footer from "./components/Layout/footer/Footer";
import { ThemeProvider } from "@mui/material";
import { Theme } from "./theme/Theme";
import Approutes from "./routes/Approutes";
const App = () => {
  const { isDarkTheme, lightTheme, DarkTheme } = useContext(Theme);

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? DarkTheme : lightTheme}>
      <Header />
      <Approutes />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
