import React from "react";
import { Route, Routes } from "react-router-dom";
import RoutePath from "./RoutePath";

const Approutes = () => {
  return (
    <Routes>
      <Route path={RoutePath.home.path} element={RoutePath.home.component} />
    </Routes>
  );
};

export default Approutes;
