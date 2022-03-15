import { useOutletContext } from "react-router-dom";

const useOutlet = () => {
  const context = useOutletContext();

  return context;
};

export default useOutlet;
