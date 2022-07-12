import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginModel from "../components/Modals/LoginModel";
import RoutePath from "./RoutePath";

const Approutes = () => {
  return (
    <>
      <LoginModel />

      <Routes>
        <Route
          exact
          path={RoutePath.home.path}
          element={RoutePath.home.component}
        />
      </Routes>
    </>
  );
};

export default Approutes;
