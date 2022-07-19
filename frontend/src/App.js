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
      <Container
        sx={{
          height: "auto",
          padding: "0px 0px",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),url(../assets/images/bg1.jpg)",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        disableGutters
        maxWidth="xl"
      >
        <Approutes />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
