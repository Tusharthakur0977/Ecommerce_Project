import { createTheme } from "@mui/material";
import React, { useState, createContext } from "react";

export const Theme = createContext();

const ThemeContextprovider = ({ children }) => {
  let lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#fdfdfd",
      },
      secondary: {
        main: "#000",
      },
    },
  });

  let DarkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const handleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <Theme.Provider value={{ isDarkTheme, handleTheme, lightTheme, DarkTheme }}>
      {children}
    </Theme.Provider>
  );
};

export default ThemeContextprovider;
