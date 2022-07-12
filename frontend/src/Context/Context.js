import React, { createContext, useState } from "react";
const Context = createContext();

const ContextProvider = ({ children }) => {
  const [searchModel, setsearchModel] = useState(false);
  return (
    <Context.Provider value={{ searchModel, setsearchModel }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
