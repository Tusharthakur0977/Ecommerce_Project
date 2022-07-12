import React, { createContext, useState } from "react";
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [searchModel, setSearchModel] = useState(false);
  const [loginModel, setLoginModel] = useState(false);

  return (
    <Context.Provider
      value={{ searchModel, setSearchModel, loginModel, setLoginModel }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
