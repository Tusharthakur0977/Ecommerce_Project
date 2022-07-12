import React, { useContext } from "react";
import { Theme } from "../../../theme/Theme";
import "./darkModeBtn.css";
const Darkmodebtn = () => {
  const { isDarkTheme, handleTheme } = useContext(Theme);
  return (
    <>
      <div id="mySidenav" className="sidenav ">
        <div>
          <input
            type="checkbox"
            checked={isDarkTheme}
            onChange={handleTheme}
            className="checkbox"
            id="checkbox"
          />
          <label htmlFor="checkbox" className="label">
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
            <div className="ball" />
          </label>
        </div>
      </div>
    </>
  );
};

export default Darkmodebtn;
