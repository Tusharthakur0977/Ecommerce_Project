import React, { useContext, useEffect } from "react";
import "./App.css";
import Header from "./components/Layout/header/Header.js";
import WebFont from "webfontloader";
import Footer from "./components/Layout/footer/Footer";
import { ThemeProvider } from "@mui/material";
import { Theme } from "./theme/Theme";
import Approutes from "./routes/Approutes";
import { Container } from "@mui/system";
import { Context } from "./Context/Context";
const App = () => {
  const { isDarkTheme, lightTheme, DarkTheme } = useContext(Theme);
  return (
    <ThemeProvider theme={isDarkTheme ? DarkTheme : lightTheme}>
      <Header />
      <Container maxWidth="xl" my="4rem" sx={{ my: "1rem" }}>
        <Approutes />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
