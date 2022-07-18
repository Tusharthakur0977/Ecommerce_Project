import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Layout/header/Header.js";
import Footer from "./components/Layout/footer/Footer";
import { ThemeProvider } from "@mui/material";
import { Theme } from "./theme/Theme";
import Approutes from "./routes/Approutes";
import { Container } from "@mui/system";
const App = () => {
  const { isDarkTheme, lightTheme, DarkTheme } = useContext(Theme);
  return (
    <ThemeProvider theme={isDarkTheme ? DarkTheme : lightTheme}>
      <Header />
      <Container disableGutters maxWidth="xl" sx={{ padding: "0px" }}>
        <Approutes />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
