import React, { useReducer } from "react";

import authReducer, { initialAuth } from "./reducers/authReducer";
import ProviderContext from "./ContextClient";

const ProviderApp = ({ children }) => {
  const [authState, dispatchAuth] = useReducer(authReducer, initialAuth);

  const providerAppData = {
    authState,
    dispatchAuth,
  };

  return (
    <ProviderContext.Provider value={providerAppData}>
      {children}
    </ProviderContext.Provider>
  );
};

export default ProviderApp;
