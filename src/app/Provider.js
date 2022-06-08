import { createContext, useState } from "react";

const Provider = ({ children }) => {
  const [state, setState] = useState(0);
  const [cart, setCart] = useState({});
  return (
    <AppContext.Provider value={[state, setState]} cart={[cart, setCart]}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
export const AppContext = createContext();