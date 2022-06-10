import React, { useState } from "react";

const Provider = ({ children }) => {
  const [state, setState] = useState({prods :[]});
  
  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
export const AppContext = React.createContext();