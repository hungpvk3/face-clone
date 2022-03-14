import { useContext } from "react";
import ProviderContext from "./ContextClient";

export const useStore = () => {
  const { authState, dispatchAuth } = useContext(ProviderContext);

  return {
    authState,
    dispatchAuth,
  };
};
