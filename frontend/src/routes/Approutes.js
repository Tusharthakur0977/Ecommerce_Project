import React from "react";
import { Route, Routes } from "react-router-dom";
import RoutePath from "./RoutePath";

const Approutes = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path={RoutePath.home.path}
          element={RoutePath.home.component}
        />
        <Route
          exact
          path={RoutePath.login.path}
          element={RoutePath.login.component}
        />
        <Route
          exact
          path={RoutePath.register.path}
          element={RoutePath.register.component}
        />
        <Route
          exact
          path={RoutePath.forgotPassword.path}
          element={RoutePath.forgotPassword.component}
        />
      </Routes>
    </>
  );
};

export default Approutes;
